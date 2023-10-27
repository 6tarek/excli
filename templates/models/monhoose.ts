import { Schema, InferSchemaType } from 'mongoose';

const schema = new Schema({
    
  });
  
type thisiplaceHolderType = InferSchemaType<typeof schema>;
export default mode("thisiplaceHolder",thisiplaceHolderType)
