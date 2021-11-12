import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('name is required')
        .min(2, 'name must be at least 2 characters'),
    sauce: yup
        .string()
        .oneOf(['tomato', 'bbq', 'alfredo'], 'Pick One'),
    size: yup
        .string()
        .oneOf(['Small', 'Medium', 'Large'], 'You Must Choose A Size'),
    special: yup
        .string(),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    ham: yup
        .boolean(),
    bacon: yup
        .boolean(),
    pineapple: yup
        .boolean(),
    mushroom: yup
        .boolean(),
    greenPepper: yup
        .boolean(),
    olive: yup
        .boolean(),
    instructions: yup
        .string(),
    })

export default formSchema;