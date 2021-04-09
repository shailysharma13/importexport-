//export array of object
let K ='';
export default   K = [
    {
        //1.properties 
        p:'50',

        //2.methods

        getval: function(){
            return this.p;
        }

    },
    {
        //1.properties
        name:"ty",
        //2.methods
        getname: function() {
            return this.name;
        }
    }
] 
let y=K[1].getname();
