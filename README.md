<p><a target="_blank" href="https://app.eraser.io/workspace/ZDVTBvUFeJy3Yf2WZoLn" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

### What is an [﻿entity relationship diagram](https://app.eraser.io/workspace/ZDVTBvUFeJy3Yf2WZoLn?elements=vz2MeaxqMwGDNViXx1R8Mw) 
- Used to model relationships among entities such as database tables
- Each entity contains an entity name and attributes (e.g. a table containing table name and fields)
- Each attribute can have an attribute name, type, and metadata (e.g. `id string pk`)
- Full syntax documentation found [﻿here](https://docs.tryeraser.com/docs/syntax-1) 


### How to insert a new entity relationship diagram ([﻿see how](https://app.eraser.io/workspace/ZDVTBvUFeJy3Yf2WZoLn?elements=vUg3pClntO64lstPmRqAkA))
1. Click on the "+" button or `/` shortcut on the canvas 
2. Select "Diagram as Code" from the menu
3. Select "Entity Relationship" from the menu


### How to edit an entity relationship diagram ([﻿see how](https://app.eraser.io/workspace/ZDVTBvUFeJy3Yf2WZoLn?elements=ywtr3pF-m8W0NBdmwTPwOA))
_Eraser's entity relationship diagrams are created and edited in code form, a concept we call Diagram-as-Code_

1. **Double-click** on the diagram to open the code editor
2. Each line of code represents a message or a statement
    - Try adding a new table with:
```
subfolders {
  id string
  parentFolderId string
}
```
- Try adding a new relationship with:
```
subfolders.parentFolderId > folder.id
```
3. Click on the "Syntax Help" button or "[﻿Documentation](https://docs.tryeraser.com/docs/syntax-1)" to learn more


<!--- Eraser file: https://app.eraser.io/workspace/ZDVTBvUFeJy3Yf2WZoLn --->