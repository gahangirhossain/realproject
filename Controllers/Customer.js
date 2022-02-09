export default class Customer{
    static add(req,res){
        try {
            res.status(200).send('add customer');
        } catch (error) {
            res.status(500).send(err.message);
        }
    }
    static getAll(req,res){
        try {
            res.status(200).send('Get All customer');
        } catch (error) {
            res.status(500).send(err.message);
        }
    }
    static updateOne(req,res){
        try {
            const { id } = req.params
            res.status(200).send('Update customer' +id);
        } catch (error) {
            res.status(500).send(err.message);
        }
    }
    static deleteOne(req,res){
        try {
            const { id } = req.params
            res.status(200).send('Delete customer' +id);
        } catch (error) {
            res.status(500).send(err.message);
        }
    }
  
    
}