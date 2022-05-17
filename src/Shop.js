import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './State/index'

const Shop = () => {

const dispatch = useDispatch()
const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch)

const CBalance = useSelector(state => state.amount)
  return (
    <>
    {/* without bindActionCreators */}
    {/* <div>
        <h2>deposit/withdraw</h2>
     <button className="btn btn-primary mx-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        update balance
     <button className="btn btn-primary mx-3" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div> */}

    {/* withbindActionCreators */}

    <div>
        <h2>deposit/withdraw</h2>
     <button className="btn btn-primary mx-3" onClick={()=>{withdrawMoney(10)}}>-</button>
        current balance {CBalance}
     <button className="btn btn-primary mx-3" onClick={()=>{depositMoney(10)}}>+</button>
    </div>
    
    </>
  )
}

export default Shop