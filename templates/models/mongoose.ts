import { Schema, InferSchemaType , model } from 'mongoose';

const schema = new Schema({
    
  });
  
type thisiplaceHolderType = InferSchemaType<typeof schema>;
export default model<thisiplaceHolderType>("thisiplaceHolder",schema)
