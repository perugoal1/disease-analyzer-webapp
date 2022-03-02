
function parseLabel(id){
    return id.replace(/(?:_| |\b)(\w)/g, function(id, p1) { return ' ' + p1.toUpperCase()});
}


export {
    parseLabel
};