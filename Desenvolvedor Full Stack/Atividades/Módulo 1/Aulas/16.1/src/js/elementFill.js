let ElementFill = (function () {
    this.load = function (data) {
        const dataFill = document.querySelector('datafill');
        const openBrackets = this.getAllIndexes(dataFill.textContent, '{{');
        const closeBrackets = this.getAllIndexes(dataFill.textContent, '}}');
        const vars = {};

        console.log(dataFill);
        console.log(this.getAllIndexes(dataFill.textContent, '{{'));
        console.log(this.getAllIndexes(dataFill.textContent, '}}'));
        console.log(dataFill.textContent.substr(17,6));
        console.log(dataFill.textContent.search('{{'));
        
        openBrackets.forEach( (openBracket, k) => {
            const closeBracket = closeBrackets[k] + 2;
            const key = dataFill.textContent.substring( openBracket, closeBracket );
            const variable = key.replace('{{', '').replace('}}', '');

            vars[variable] = key;
        });
        console.log(vars);
        
        for( let key in vars ) {
            const variable = vars[key];
            
            dataFill.innerHTML = dataFill.innerHTML.replace(variable, data[key]);
        }
        
        console.log(vars);
    }

    this.getAllIndexes = function ( arr, val ) {
        const indexes = [];
        let i = -1;
    
        while ( (i = arr.indexOf( val, i + 1 ) ) != -1 ) {
            indexes.push(i);
        }
    
        return indexes;
    }

    return this;
})();