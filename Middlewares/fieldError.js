import errResult from '../Validations/errResult';
export default (req,res,next)=>{
    const errors = errResult(req);
    if(errors.isEmpty()){
        next()
    }
    else return res .status(422).json(errors .mapped());
}