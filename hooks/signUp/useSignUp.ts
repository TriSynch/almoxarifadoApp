import { SignUpFormValues } from '@/types/signUp'
import { useState } from 'react'

export function useSignUp() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)

  async function signUp(userData: SignUpFormValues) {
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
			console.log('userData:', userData)
      const response = await fetch(`${process.env.API_ENDPOINT}/users/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error('Falha ao cadastrar. Tente novamente.')
      }

      setSuccess(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return { signUp, loading, error, success }
}
