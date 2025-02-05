import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'
import s from "./ContactForm.module.css"

const ContactForm = ({ onAddContact }) => {
    const initialValues = {
        name: '',
        number: '',
    };
    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
        number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    });

    const handleSubmit = (values, actions) => {
        onAddContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
        actions.resetForm();
    }


    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} 
        >
            <Form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <Field id="name" name="name" type="text" className={ s.input} />
                <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div>
                    <label htmlFor="number">Number</label>
                <Field id="number" name="number" type="text"  className={ s.input} />
                <ErrorMessage name="number" component="div" className="error" />
                </div>
                
                <button type="submit" className={s.btn}>Add Contact</button>
            </Form>
        </Formik>
    )

}
export default ContactForm;