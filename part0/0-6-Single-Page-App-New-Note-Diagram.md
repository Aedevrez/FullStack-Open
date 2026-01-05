sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 - Created

    Note right of browser: Only a single new request has been issued, which returned a JSON of the new note created and appended to the unordered list.