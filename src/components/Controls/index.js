
const SetupControls = (scanner) => {
    
    let style = `
        position : absolute;
        bottom: 0
    `

    selectBase(div('', {style}));
        let scanBtn = button("scan");
        scanBtn.onclick = (scanner.startVideo).bind(scanner);
    unselectBase();
    scanner.controls = {scanBtn};
}
    
export default  SetupControls ;
