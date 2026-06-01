import * as yup from 'yup'

export const demoFromSchema = yup.object({
  company_name: yup.string().trim().required('Company name is required'),
  contact_person: yup.string().required('Contact person name is required'),
  work_email: yup.string().email('Enter a valid email address').required('Work email is required'),
  phone_number: yup
    .string()
    .trim()
    .min(10, 'At least 10 digits are required')
    .max(15, 'Maximum 15 digits allowed')
    .required('Phone number is required'),
  company_website: yup
    .string()
    .trim()
    .url('Enter a valid website URL')
    .required('Company website is required'),
  country_region: yup
    .string()
    .trim()
    .required('Country / region is required'),
  preferred_time: yup.string().required('Preffered time is required'),
  message: yup
    .string()
    .trim()
    .max(500, 'Maximum 500 characters allowed')
});