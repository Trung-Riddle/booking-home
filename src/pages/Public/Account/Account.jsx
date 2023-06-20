import { InputForm, Button } from '../../../components'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as actions from '../../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const Account = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, message, update } = useSelector((state) => state.auth)
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [invalidFields, setInvalidFields] = useState([])
  const [payload, setPayload] = useState({
    phone: '',
    password: '',
    name: ''
  })
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])
  useEffect(() => {
    isLoggedIn && navigate('/')
  }, [isLoggedIn])
  useEffect(() => {
    message && Swal.fire('Thông Báo!!!', message, !isLoggedIn ? 'error': 'success')
  }, [message, update])
  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password
        }

    let invalids = validate(finalPayload)
    if (invalids === 0) {
      isRegister ? dispatch(actions.register(finalPayload)) : dispatch(actions.login(finalPayload))
    }
    console.log(invalids)
  }
  const validate = (payload) => {
    let invalids = 0
    // chuyển object thành array
    let fields = Object.entries(payload)
    fields.forEach((field) => {
      if (field[1] === '') {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: field[0],
            message: `Vui lòng nhập trường ${field[0]} [!]`
          }
        ])
        invalids++
      }
    })

    fields.forEach((field) => {
      switch (field[0]) {
        case 'password':
          if (field[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: field[0],
                message: `Mật khẩu phải có tối thiểu 6 kí tự`
              }
            ])
            invalids++
          }
          break
        case 'phone':
          if (!+field[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: field[0],
                message: `Số điện thoại không hợp lệ`
              }
            ])
            invalids++
          }
          break

        default:
          break
      }
    })
    return invalids
  }
  return (
    <form className='w-full max-w-[600px] border shadow-lg rounded-md mt-4 bg-white px-4 py-3'>
      <h2 className='font-semibold text-2xl text-center border-b-2 pb-2 border-b-rose-500'>
        {isRegister ? 'Đăng Ký Tài Khoản' : 'Đăng Nhập Tài Khoản'}
      </h2>
      {isRegister && (
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          value={payload.name}
          setValue={setPayload}
          label={'Họ và tên'}
          plText={'Nhập Họ và tên '}
          type={'text'}
          field={'name'}
        />
      )}
      <InputForm
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        value={payload.phone}
        setValue={setPayload}
        label={'Phone'}
        plText={'Nhập phone '}
        type={'text'}
        field={'phone'}
      />
      <InputForm
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        label={'Mật khẩu'}
        plText={'Nhập mật khẩu '}
        type={'password'}
        value={payload.password}
        setValue={setPayload}
        field={'password'}
      />
      <Button
        className={'mt-5 mx-auto shadow-lg hover:shadow-rose-500/50 ease-in ease-in duration-300'}
        children={isRegister ? 'Đăng Ký' : 'Đăng Nhập'}
        bgColor={'bg-rose-600'}
        textColor={'text-white'}
        onClick={handleSubmit}
      />
      <div className='flex justify-between h-12 items-center border-t mt-4'>
        {isRegister ? (
          <p className='text-slate-400 cursor-pointer hover:text-slate-600 ease-in duration-200 border-b-slate-500 hover:border-b'>
            Bạn đã có tài khoản?{' '}
            <span
              className='text-blue-500 hover:text-blue-700'
              onClick={() => {
                setIsRegister(false)
                setPayload({
                  phone: '',
                  password: '',
                  name: ''
                })
              }}
            >
              Đăng Nhập Ngay
            </span>
          </p>
        ) : (
          <>
            <p className='text-slate-400 cursor-pointer hover:text-slate-600 ease-in duration-200 border-b-slate-500 hover:border-b'>
              Bạn quên pass?
            </p>
            <p className='text-slate-400 cursor-pointer hover:text-slate-600 ease-in duration-200 border-b-slate-500 hover:border-b'>
              Bạn chưa có acc?
              <span
                className='text-blue-500 hover:text-blue-700'
                onClick={() => {
                  setIsRegister(true)
                  setPayload({
                    phone: '',
                    password: '',
                    name: ''
                  })
                }}
              >
                Đăng ký
              </span>
            </p>
          </>
        )}
      </div>
    </form>
  )
}

export default Account
