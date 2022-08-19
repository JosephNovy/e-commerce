// domain/.netlify/function/hello

exports.handle = async function(event.context){
    return{
        statusCode:200,
        body : 'hello wolrd'
    }
}