import * as Yup from 'yup';
import styles from "./styles.module.scss";
import {TextField} from "../../../../shared/components/TextField";
import {TextAreaField} from "../../../../shared/components/TextaAreaField";
import {SelectField} from "../../../../shared/components/SelectField";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {useMutation, useQuery} from "react-query";
import {getListCategory} from "../../../../core/api/category/CategoryRepository";
import {useEffect, useState} from "react";
import {Category} from "../../../Category/models/Category";
import {postSaveProduct} from "../../../../core/api/product/ProductRepository";
import {Product} from "../../models/Product";
import {useDispatch} from "react-redux";
import {listCategoryProducts} from "../../../../core/redux/actions/category/CategoryActions";
import {toast} from "react-toastify";

export const FormGestionProduct = () => {
  let navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([])
  const dispatchRedux = useDispatch()
  const {data:dataCategory} = useQuery('category', getListCategory)
  const mutation = useMutation( (formData:Product) => {
    return postSaveProduct(formData)
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

  const form = useFormik(
    {
      initialValues: {
        id: '',
        name: '',
        image: '',
        note: '',
        categoryId: ''
      },
      validationSchema: Yup.object({
        name: Yup.string().required('The name is required'),
        image: Yup.string().url('Image must be a valid URL').notRequired(),
        note: Yup.string().notRequired(),
        categoryId: Yup.string().required('The category is required'),
      }),
      onSubmit: async (values:Product) => {
        mutation.mutate(values)
      }
    }
  )
  const theme = 'light'

  return (
    <div className={`${styles[theme + '__aside-content']}`}>
      <div className={`${styles[theme + '__form']} px-44`}>
        <div className="py-34">
          <h2 >Add a new item</h2>
        </div>
        <form id="formProduct" className="flex-1" noValidate onSubmit={form.handleSubmit}>
          <TextField
            id={'name'}
            label={'Name'}
            className="mb-18"
            errors={form.errors}
            inputProps={{
            type: 'text',
            name: 'name',
            placeholder: 'Enter a name',
            onChange: form.handleChange,
            value: form.values.name,
          }}/>
          <TextAreaField
            id={'note'} label={'Note (optional)'}   inputProps={{
            placeholder: 'Enter a note',
            name: 'note',
            rows: 4,
            className: 'mb-24',
            onChange: form.handleChange,
            value: form.values.note
          }}/>
          <TextField
            id={'image'}
            errors={form.errors}
            className="mb-33"
            label={'Image (optional)'}
            inputProps={{
              placeholder: 'Enter a url',
              name: 'image',
              onChange: form.handleChange,
              value: form.values.image
          }}/>
          <SelectField id='categoryId' errors={form.errors}  inputProps={{
            name: 'categoryId',
            onChange: form.handleChange,
            value: form.values.categoryId
          }}
          items={categoryList}
          />
        </form>
        <div className={`pb-34 flex justify-center ${styles[theme + '__actions']}`}>
          <Link to="../" className="btn btn-flat">
            cancel
          </Link>
          <button className="btn btn-primary" form="formProduct" type="submit" >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}