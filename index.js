var sampleData = {
    "title": {
        "media": {
            "url": "",
            "caption": "",
            "credit": ""
        },
        "text": {
            "headline": "Sample",
            "text": "Welcome to this timeline sample"
        }
    },
    "events": [
        {
            "media": {
                "url": "",
                "caption": "",
                "credit": ""
            },
            "start_date": {
                "month": "8",
                "day": "9",
                "year": "1963"
            },
            "text": {
                "headline": "A headline",
                "text": "<p>This is a text under headline.</p>"
            }
        },
        {
            "media": {
                "url": "",
                "caption": "",
                "credit": ""
            },
            "start_date": {
                "month": "8",
                "day": "10",
                "year": "1963"
            },
            "text": {
                "headline": "Another headline",
                "text": "<p>This is antoher text under headline.</p>"
            }
        }
    ]
},

getData = function() {
    return sampleData;
};