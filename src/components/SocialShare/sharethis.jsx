import React from 'react';
import {InlineShareButtons} from 'sharethis-reactjs';

function Sharethis({url, image, thumb, description, title}) {
    const thumbnail = thumb?thumb:image;
    return (
        <InlineShareButtons
            config={{
                alignment: 'left',  // alignment of buttons (left, center, right)
                color: 'social',      // set the color of buttons (social, white)
                enabled: true,        // show/hide buttons (true, false)
                font_size: 12,        // font size for the buttons
                labels: 'cta',        // button labels (cta, counts, null)
                language: 'en',       // which language to use (see LANGUAGES)
                networks: [           // which networks to include (see SHARING NETWORKS)
                    'facebook',
                    'messenger',
                    'linkedin',
                    'whatsapp',
                    'twitter'
                ],
                padding: 12,          // padding within buttons (INTEGER)
                radius: 20,            // the corner radius on each button (INTEGER)
                show_total: true,
                size: 30,             // the size of each button (INTEGER)


                // OPTIONAL PARAMETERS

                min_count: 10,                    // (threshold for total share count to be displayed)
                url: url, // (defaults to current url)
                image: thumbnail,  // (defaults to og:image or twitter:image)
                description: description,       // (defaults to og:description or twitter:description)
                title: title,            // (defaults to og:title or twitter:title)
                message: title,     // (only for email sharing)
                subject: title,  // (only for email sharing)
                username: title // (only for twitter sharing)
            }}
        />
    );
}

export default Sharethis;