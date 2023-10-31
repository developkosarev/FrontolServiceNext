'use client'

import React, { useState, useCallback, useEffect } from 'react';
import { AddressAutofill, AddressMinimap, useConfirmAddress, config } from '@mapbox/search-js-react';
import styles from './MapboxAutofill.module.scss'

export default function MapboxAutofill() {
    const MAPBOX_ACCESS_TOKEN: string = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const [showFormExpanded, setShowFormExpanded] = useState(false);
    const [showMinimap, setShowMinimap] = useState(false);
    const [feature, setFeature] = useState();
    const [showValidationText, setShowValidationText] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        const accessToken = `${MAPBOX_ACCESS_TOKEN}`;
        setToken(accessToken)
        config.accessToken = accessToken;
    }, [])

    const { formRef, showConfirm } = useConfirmAddress({
        minimap: true,
        skipConfirmModal: (feature) => {
            ['exact', 'high'].includes(feature.properties.match_code.confidence)
        }
    });

    const handleRetrieve = useCallback(
        (res) => {
            const feature = res.features[0];
            setFeature(feature);
            setShowMinimap(true);
            setShowFormExpanded(true);
        },
        [setFeature, setShowMinimap]
    );

    function handleSaveMarkerLocation(coordinate) {
        console.log(`Marker moved to ${JSON.stringify(coordinate)}.`)
    }

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const result = await showConfirm();
        if (result.type === 'nochange') submitForm();
    }, [showConfirm]);

    function submitForm() {
        setShowValidationText(true);
        setTimeout(() => {
            resetForm();
        }, 2500);
    }

    function resetForm() {
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.value = "");
        setShowFormExpanded(false);
        setShowValidationText(false);
        setFeature(null);
    }

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3">
                    {/* Input form */}
                    <label className="form-label">Address</label>
                    <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
                        <input
                            className="form-control"
                            placeholder="Start typing your address, e.g. 123 Main..."
                            autoComplete="address-line1"
                            id="mapbox-autofill"
                        />
                    </AddressAutofill>
                </div>

                { !showFormExpanded &&
                    <div id="manual-entry"
                        onClick={() => setShowFormExpanded(true)}
                    >
                        Enter an address manually
                    </div>
                }

                <div className="mb-3" style={{ display: showFormExpanded ? 'block' : 'none' }}>
                    <label className="form-label">Address Line 2</label>
                    <input
                        className="form-control"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        autoComplete="address-line2"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input
                        className="form-control"
                        placeholder="City"
                        autoComplete="address-level2"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">State / Region</label>
                    <input
                        className="form-control"
                        placeholder="State / Region"
                        autoComplete="address-level1"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">ZIP / Postcode</label>
                    <input
                        className="form-control"
                        placeholder="ZIP / Postcode"
                        autoComplete="postal-code"
                    />
                </div>

                <div className="mb-3">
                    {/* Visual confirmation map */}
                    <div
                        id="minimap-container"
                        className="h240 w360 relative mt18"
                    >
                        <AddressMinimap
                            canAdjustMarker={true}
                            satelliteToggle={true}
                            feature={feature}
                            show={showMinimap}
                            onSaveMarkerLocation={handleSaveMarkerLocation}
                        />
                    </div>
                </div>

                {/* Form buttons */}
                { showFormExpanded &&
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary" id="btn-confirm">
                            Confirm
                        </button>
                        <button type="button" className="btn btn-light" style={{marginLeft: 10}} id="btn-reset" onClick={resetForm}>
                            Reset
                        </button>
                    </div>
                }
            </form>


            {/* Validation text */}
            { showValidationText &&
                <div id="validation-msg" className="mt24 txt-m txt-bold">Order successfully submitted.</div>
            }
        </>
    );
};
