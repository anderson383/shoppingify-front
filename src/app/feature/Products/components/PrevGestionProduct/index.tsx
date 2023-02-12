import styles from "./styles.module.scss";
import {TextField} from "../../../../shared/components/TextField";
import {TextAreaField} from "../../../../shared/components/TextaAreaField";
import {SelectField} from "../../../../shared/components/SelectField";
import {Button} from "../../../../shared/components/Button";

export const FormGestionProduct = () => {
  const theme = 'light'
  return (
    <div className={`${styles[theme + '__aside-content']}`}>
      <div className={`${styles[theme + '__form']} px-44`}>
        <div className="py-34">
          <h2 >Add a new item</h2>
        </div>
        <form action="" className="flex-1">
          <TextField id={'input'} label={'Name'} inputProps={{
            placeholder: 'Enter a name',
            className: 'mb-18'
          }}/>
          <TextAreaField
            id={'input'} label={'Note (optional)'} inputProps={{
            placeholder: 'Enter a note',
            rows: 4,
            className: 'mb-24'
          }}/>
          <TextField id={'input'} label={'Image (optional)'} inputProps={{
            placeholder: 'Enter a url',
            className: 'mb-33'
          }}/>
          <SelectField />
        </form>
        <div className="pb-34 flex justify-center">
          <Button type="btn-flat">
            Save
          </Button>
          <Button color="btn-primary"  >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}