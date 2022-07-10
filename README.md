# AnvilToolkit-AT
Addtional tools for AnvilToolkit

## Tools
### Duplicate (Corruption) Cleaner (clean.js)
Important data:
* Name: Duplicate (Corruption) Cleaner
* Role: Clean the corrupted dupplicated files into the extracted files of AnvilToolkit. Generally, corrupted duplicated files have a regular name containing "Unnamed.data"
* Required to execute: [Node.JS](https://nodejs.org/en/)
* How to execute it (while there's no interface for it yet):
  ```cmd
  cd "<repo of clean.js file>"
  node clean.js
  ```
* How to execute it (with the interface):
  * Go to "Duplicate Cleaner"
  * Enter the dir of the Extracted/ into your game folder
  * Enter the recursive character chain in the name of the files (as Unnamed.data, CorruptedData.data, BrokenArchive.data, etc...)
  * Press "Clean"
    * If nothing have been deleted, a message will show up
    * If something have been deleted, a message showing which files have been deleted and how many they were will show up.
* Author of the tool: V E L Δ (VELD-Dev)
