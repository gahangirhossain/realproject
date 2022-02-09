import expressValidator from 'express-validator';
const {validationResult} = expressValidator;

const errResult = validationResult.withDefaults({
        formatter: (error)=> {
            return error.msg;
        }
})
export default errResult;