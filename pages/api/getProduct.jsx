import Product from '../../models/Product';
import connectDb from '../../middleware/mongoose';

const handler = async (req, res) => {
  let products = await Product.find();
  let handbages = {};
  for (let item of products) {
    if (item.title in handbages) {
      if (
        !handbages[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        handbages[item.title].color.push(item.color);
      }
      if (
        !handbages[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        handbages[item.title].size.push(item.size);
      }
    } else {
      handbages[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        handbages[item.title].color = [item.color];
        handbages[item.title].size = [item.size];
      }
    }
  }
  res.status(200).json({ handbages });
};

export default connectDb(handler);
