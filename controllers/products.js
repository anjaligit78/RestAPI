
const Product = require("../models/product")

const getAllProducts = async(req,res) => {

const {company, name, featured,sort,select} = req.query;
const queryObject = {};

if (company){
    queryObject.company = company;
    
}
if (featured){
    queryObject.featured = featured;
    
}
 
if (name) {
    queryObject.name = { $regex:name, $options:"i" };
}

 let apiData = Product.find(queryObject);

if (sort) {
    let sortFix = sort.split(",").join( " ");
    apiData = apiData.sort(sortFix);
};
 
if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join( " ");
    apiData = apiData.select(selectFix);
};

let page = Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 10;

let skip = (page - 1) * limit;



apiData = apiData.skip(skip).limit(limit);
  
console.log(queryObject)

const products = await apiData;
res.status(200).json({products , nbHits:products.length});
};


const getAllProductsTesting = async(req,res) => {
   
    const products = await Product.find(req.query);
    // sort = name price;
    console.log(req.query);
    res.status(200).json({products , nbHits:products.length});
    };

    module.exports = {getAllProducts, getAllProductsTesting};