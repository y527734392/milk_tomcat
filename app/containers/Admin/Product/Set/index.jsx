/**
 * Created by muyi on 2017/9/20.
 */

import React from 'react'
import Subnav from '../../../Subnav'
import util from '../../../../utils/help'
let _ = new util();

class Set extends React.Component {
    render() {
        return (
            <div className="home">
                <Subnav />
                <div className="content">
                    <div className="product_set">
                        <h3>新增/编辑</h3>
                        <form action="">
                            <ul className="con">
                                <li className="">
                                    <span className="title">产品名称：</span>
                                    <div className="txt">
                                        <input type="text" placeholder="请输入产品名称"/>
                                    </div>
                                </li>
                                <li className="">
                                    <span className="title">产品类别：</span>
                                    <div className="txt">
                                        <ul>
                                            <li className="form-readio">
                                                <input type="radio" name="model" className="radio" value="1" /> <label>酸奶</label>
                                            </li>
                                            <li className="form-readio">
                                                <input type="radio" name="model" className="radio" value="2" /> <label>鲜奶</label>
                                            </li>
                                            <li className="form-readio">
                                                <input type="radio" name="model" className="radio" value="3" /> <label>儿童奶</label>
                                            </li>
                                            <li className="form-readio">
                                                <input type="radio" name="model" className="radio" value="4" /> <label>其他</label>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="">
                                    <span className="title">规格：</span>
                                    <div className="txt">
                                        <input type="text" placeholder="请输入产品规格"/>
                                    </div>
                                </li>
                                <li className="">
                                    <span className="title">产地：</span>
                                    <div className="txt">
                                        <input type="text" placeholder="请输入产品产地"/>
                                    </div>
                                </li>
                                <li className="">
                                    <span className="title">保质期：</span>
                                    <div className="txt">
                                        <input type="text" placeholder="请输入产品保质期"/>
                                    </div>
                                </li>
                                <li className="">
                                    <span className="title">储藏方法：</span>
                                    <div className="txt">
                                        <input type="text" placeholder="请输入产品储藏方法"/>
                                    </div>
                                </li>
                                <li className="">
                                    <span className="title">产品图片：</span>
                                    <div className="txt">
                                        <input type="text" placeholder="请输入产品名称"/>
                                    </div>
                                </li>
                                <li className="">
                                    <span className="title">产品详情：</span>
                                    <div className="txt">
                                        <textarea name="" placeholder="请输入产品详情"></textarea>
                                    </div>
                                </li>
                            </ul>
                        </form>
                        <div className="product_setBtn">保存</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Set