import { FiAlertCircle } from 'react-icons/fi'

type Props = {
  hasError: boolean
}

export function LoginError({ hasError }: Props) {
  if (hasError) {
    return (
      <div className="mt-3 mb-7 w-full text-white bg-red-500 flex items-center gap-4 px-4 py-3">
        <FiAlertCircle size={24} />
        <span className='text-xs'>Nome de usuário ou senhas incorretos.</span>
      </div>
    )
  }

  return null
}