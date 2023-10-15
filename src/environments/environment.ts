const apiUrl = 'https://my-json-server.typicode.com/baironfreire/json-server/'
export const environment =  Object.freeze({
    production: false,
    API: {
        student: {
            get_students: apiUrl + 'students',
            put_student: apiUrl  + '' 
        }
    }
})