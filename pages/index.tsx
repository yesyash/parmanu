import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import Input from '@/components/atoms/input'
import React from 'react'

const Home = () => {
    return (
        <>
            <Container>
                <div className="col-span-full">
                    <div className="font-body my-4">nice home</div>
                    <Input
                        type="text"
                        placeHolder="test"
                        onChange={(e) => console.log(e.target.value)}
                    />

                    <div className="mt-4 w-36">
                        <Button onClick={(e) => console.log(e)}>submit</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home
