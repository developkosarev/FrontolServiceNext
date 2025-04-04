import { NextRequest } from 'next/server'

export const dynamic = 'force-static'

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
           <sharpUpdate>
              <update>
                <version>1.0.0.2</version>
                <url>http://cfgsoft.github.io/FrontolServiceAddon/FrontolServiceAddon.exe</url>
                <filePath>./FrontolServiceAddon.exe</filePath>
                <md5>019CEDB7ADD4982087AFCAB21CF184F8</md5>
                <description>Update auto: 06.02.2020 11:12:20 :1.Updated a label.</description>
                <launchArgs />
              </update>
              <update>
                <version>1.0.0.2</version>
                <url>http://cfgsoft.github.io/FrontolServiceAddon/FrontolService.DAL.dll</url>
                <filePath>./FrontolService.DAL.dll</filePath>
                <md5>32A7B06DA950822AE3EA1CA1A6D3610F</md5>
                <description>Update auto: 06.02.2020 11:12:20 :1.Updated a label.</description>
                <launchArgs />
              </update>
              <update>
                <version>1.0.0.0</version>
                <url>http://cfgsoft.github.io/FrontolServiceAddon/SharpUpdate.dll</url>
                <filePath>./SharpUpdate.dll</filePath>
                <md5>0B3B673BF06D0643CEE58D0B31DEF679</md5>
                <description>Update auto: 06.02.2020 11:12:20 :1.Updated a label.</description>
                <launchArgs />
              </update>
            </sharpUpdate>`;
}

export async function GET(request: NextRequest) {
  const sitemap = generateSiteMap();

  return new Response(sitemap, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' }
  })
}
