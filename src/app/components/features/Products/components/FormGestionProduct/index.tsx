import * as Yup from 'yup';
import styles from "./styles.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {Form, Formik} from "formik";
import {useMutation, useQuery} from "react-query";
import {useEffect, useRef, useState} from "react";
import {Category} from "../../../Category/models/Category";
import {Product} from "../../models/Product";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import { listCategoryProducts } from '../../../../../core/redux/actions/category/CategoryActions';
import { TextField } from '../../../../ui/atoms/TextField';
import { TextAreaField } from '../../../../ui/atoms/TextaAreaField';
import { SelectField } from '../../../../ui/atoms/SelectField';
import useConfigRepository from '../../../../../hooks/repositories/useConfigRepository';
import useShopRepository from '../../../../../hooks/repositories/useShopRepository';

export const FormGestionProduct = () => {
  let navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([])
  const dispatchRedux = useDispatch()
  const configRepository = useConfigRepository()
  const {data:dataCategory} = useQuery('category', configRepository.getListCategory)
  const shopRepository = useShopRepository()
  const formRef = useRef(null)
  const mutation = useMutation( (formData:Product) => {
    return shopRepository.postSaveProduct(formData)
  }, {
    onSuccess: () => {
      toast("Your product has been saved");
      dispatchRedux<any>(
        listCategoryProducts()
      )
      navigate('/')
    }
  })

  useEffect(() => {
    setCategoryList(dataCategory ? dataCategory.map((item:Category) => ({ id: item.id,label: item.name, value: item.id  })) : [])
  }, [dataCategory])

  const initialValues = {
    id: '',
    name: '',
    image: '',
    note: '',
    categoryId: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string().required('The name is required'),
    image: Yup.string().url('Image must be a valid URL').notRequired(),
    note: Yup.string().notRequired(),
    categoryId: Yup.string().required('The category is required'),
  })
  const onSumit = async (values:Product) => {
    mutation.mutate(values)
  }
  const theme = 'light'

  const handleExternalSubmit = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };

  return (
    <div className={`${styles[theme + '__aside-content']}`}>
      <div className={`${styles[theme + '__form']} px-44`}>
        <div className="py-34">
          <h2 >Add a new item</h2>
        </div>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSumit}
        >
          <Form className={styles.formContent}>
            <TextField
              id={'name'}
              name='name'
              label={'Name'}
              className="mb-18"
              inputProps={{
                type: 'text',
                placeholder: 'Enter a name',
              }}
            />
            <TextAreaField
              name='note'
              id={'note'} label={'Note (optional)'}   inputProps={{
              placeholder: 'Enter a note',
              name: 'note',
              rows: 4,
              className: 'mb-24',
            }}/>
            <TextField
              id={'image'}
              name='image'
              className="mb-33"
              label={'Image (optional)'}
              inputProps={{
                placeholder: 'Enter a url',
            }}/>
            <SelectField id='categoryId'
              name='categoryId'
              inputProps={{
                name: 'categoryId',
              }}
              items={categoryList}
            />
          </Form>
        </Formik>
          <div className={`pb-34 flex justify-center ${styles[theme + '__actions']}`}>
            <Link to="../" className="btn btn-flat">
              cancel
            </Link>
            <button className="btn btn-primary"  type="submit" onClick={() => handleExternalSubmit()} >
              Save
            </button>
          </div>
      </div>
    </div>
  )
}