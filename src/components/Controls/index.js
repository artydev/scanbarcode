
const SetupControls = (scanner) => {
    
    let style = `
        position : absolute;
        bottom: 0;
        width: 100%;
        display:flex;
        line-height: 48px;
        justify-content: space-around;
    `
    selectBase(div('', {style}));
        sb(div(""))
            let scanBtn = button("scan", "display:inline-block");
            let historyBtn = button("historique", "display:inline-block");
        unselectBase()
        scanBtn.onclick = (scanner.startVideo).bind(scanner);
        historyBtn.onclick = (scanner.showHistory).bind(scanner);
    unselectBase();
    scanner.controls = {scanBtn};
}
    
export default  SetupControls ;
