const robotFinder = {
    url: 'http://api.citybik.es/v2/networks',
    arrayIni: [],
    arrayTemp: [],
    arrayCountry: [],
    actual: {},
    

    findAll() {
        return fetch(this.url)
            .then(res => res.json())
            .then(data => {
                this.arrayIni = data.networks;

                return data.networks;
            })
            .catch(err => {throw Error("error")})
           
    }
    ,

    sorting(){
        let arrayTemp = this.arrayIni.sort(function(a, b){
            if(a.location.country < b.location.country) return -1;
            if(a.location.country > b.location.country) return 1;
            return 0;
        })
        arrayTemp = this.arrayIni.filter((x) => x.location.country)
    }
    ,

    singleCountryName(){

        let lastCountry = "";
        let remArr = [];
        
        this.arrayIni.forEach((x) => {
            if (x.location.country !== lastCountry){
                lastCountry = x.location.country
                remArr.push(lastCountry)
            } 
        })
        this.arrayTemp = remArr
        return remArr
    }
    ,

    //BUSCA "EMPRESAS" POR PAIS (PONER CON SIGLAS)
    filteringCountry(country) {
        let a = this.arrayIni;
        this.arrayCountry = a.filter((x) => {if (x.location.country === country) return x})
        if (this.arrayCountry.length === 0) throw Error("There are not robot places in "+country)
    }
    ,

    //CON LA ID(tipo string, no en stations) DE filteringCountry, GUARDADA EN robotFinder.arrayCountry
    checkRobot(net_id){
        fetch(`${this.url}/${net_id}`)
            .then(res => res.json())
            .then(net => {
                this.actual = net;
            })     
    },

    //Params change
    changeParams(){
        let data = {
            type : this.typeofMarket(this.actual.network.stations.length),
            company : this.replacingCompany(this.actual.network.company),
            city : this.actual.network.location.city,
            country : this.actual.network.location.country,
            shops : this.changeShops(this.actual.network.stations)
        }
        return data
    },

    changeShops(shops) {
        let n = shops.length
        for (var i = 0; i < n; i++){
            let shop = {
                type : this.shopType(this.adding(shops[i].id), shops[i].empty_slots), 
                outletRobots: shops[i].empty_slots,
                standbyDays: shops[i].free_bikes,
                location: this.shopLocation(n, i, shops[i].name)
            }
            shops[i] = shop
        }
        
        return shops
    },
    
    //llamadas desde funciones
    shopLocation(n, i, str) {
        if(n > 70) { return str} 
        else if (n > 10) {return `local nº ${i}`}
        else if (n > 1) {return `section nº ${i}`}
        else return "undefined"
    },

    typeofMarket(n){
        if (n > 100) return "Robotic-city"
        if (n > 70) return "Street Robomarket"
        if (n > 50) return "Robomall"
        if (n > 30) return "Robot-Hipermarket"
        if (n > 20) return "Robot-Supermarket"
        if (n > 10) return "Robot-Market"
        return "Robots Bazaar"
    },
    
    replacingCompany(arr){
        let str = arr[0]
        str = str.replace(/Bicicleta/gi,"Robot").replace(/Bici/gi,"Cyborg").replace(/Rueda/gi,"Autómata")
        str = str.replace(/Bike/gi,"Robot").replace(/Wheel/gi,"Cyborg").replace(/Roll/gi,"Autómata")
        return str
    },

    adding(str){
        let sum = 0
        str = str.split("")
        
        for(let x in str) {
            if (isNaN(str[x])){
                str[x] = str[x].charCodeAt(0)
            }
            sum += str[x]
            sum %= 10
        }
        return sum
    },

    shopType(num, num2){
        num2 %= 4
        if (num2 === 0){ num2 = "Cyborgs" } else if(num2 === 1){ num2 = "Automatons" } else { num2 = "Robots" } 
        switch (num){
            case 0: return (`Workshop for ${num2}`)
            case 1: return (`Workshop for ${num2}`)
            case 2: return (`Workshop for ${num2}`) 
            case 3: return (`${num2} shop`)
            case 4: return (`${num2} shop`)
            case 5: return (`${num2} shop`)
            case 6: return (`Cleaing ${num2} shop`)
            case 7: return (`Renting ${num2}`)
            case 8: return (`Companion ${num2} shop`)
            case 9: return (`Caregivers ${num2} shop`)
            default: return (`${num2} shop`)
        }
    }

}     
// robotFinder.findAll()           
export default robotFinder