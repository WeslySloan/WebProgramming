import { useEffect, useState } from "react"

const Index = () => {
  const [counter, setCounter] = useState<number>(0)
  const [phone, setPhone] = useState<string>("")
  const [validPhone, setValidPhone] = useState<boolean>(false)

  useEffect(() => {
    console.log("검사")
    setValidPhone(phone.search(/[0-9]{3}-[0-9]{4}-[0-9]{4}/) !== -1)
  }, [phone])

  return <>
    <div onClick={(() =>{
      setCounter(counter+1)
    })}>
      Hello world! { counter }
    </div>
    <input type="text" name="name" onChange={(e) => {
      setPhone(e.target.value)
    }}></input>
    {phone}{validPhone.toString()}
  </>
}

export default Index