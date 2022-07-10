type cleanerReturnData = {
    files_checked: string[],
    files_removed: string[],
}
function clean(path: string, regularExpression: string): cleanerReturnData {
    let filesRemoved: string[] = [];
    let filesChecked: string[] = [];
    fs.readdir(path, async (err: Error, files: string[]) => {
        if(err) console.log(err)
        let totalFiles: number = 0;
        files.forEach(checkfile => {
            filesChecked.push(checkfile)
            totalFiles++ 
            let blStr: string = `.*_${regularExpression}\.data`;
            let regexp: RegExp = new RegExp(blStr, 'g');
            if(regexp.test(checkfile) == true) {
                files.forEach(file2 => {
                    console.log("Checking " + file2 + "...")
                    if(file2.split("_")[0] == checkfile.split("_")[0] && file2 !== checkfile) {
                        fs.unlinkSync(`./DataPC.forge/${checkfile}`)
                        const index = files.indexOf(checkfile)
                        if(index > -1) files.splice(index, 1) && filesRemoved.push(checkfile);
                        console.log("Deleted " + checkfile)
                    }
                })
            }
        })
        console.log(`Deleted ${totalFiles} files successfully.`)
    })
    return {files_checked: filesChecked, files_removed: filesRemoved}
}

module.exports = {
    clean,
};