/*
-describe()
-it()
-expect()
*/
function add(a,b){
    return (a+b);
}
function div(a,b){
    return(a/b);
}
describe('Arithmetic test',()=>{
    it('adds two numbers correctly',()=> {
        expect(add(10,20)).toBe(30);
    });

it('divides two numbers correctly', ()=>{
    expect(div(10, 20)).toBe(2);
});
})