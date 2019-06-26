import React, { Component } from "react";
import "./Cart.css";
import { HashRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom"; 

export default class Cart extends Component {
  backHome(){

  }
render() {
return (
<div>
  <header id="topbar" className="header">
    <div className="header content">
      <span className="btn-back">
        <label className="leftback-img" onClick={this.backHome.bind(this)} />
      </span>
      <p className="header-title"> 购物车</p>
      <label className="editcart">修改</label>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAbFBMVEUAAAC9y9K9zNS+zNO50NC9zNS9zNa+zNW9zNS8zNW+zNS9zNS9zNS9zdS9zNS9zNS9zNS9zNS9zNK9zNS9zNS9zNS9zNS9zNS8y9S9zNS9zNS9zNS8zNS+zNS9zNS9zNS9zNS9zNW9zdS9zNSnSYT7AAAAI3RSTlMACvAaBbBQLfZAqOHbN2+Wu1oRzJ7Eoo/qh+WAHybUR3llYFpz7QAAAARFSURBVHja7NfXcqswGATglQQI00xxb/Hxvv87HgF2hBInMxjFV3xXMAzzL+pgNpvNZrPZbDabzWavWHBI4u0KOk54txUdEd6toeOKd4tJanRCkgn+2GIpMHSmEaBzJJnBIQrf9WNmGgMRyWZwTYEBnTHxXN/2s/3qDXonGhpWEZNMPNdvrRUA2+8F7iTJGx7qkJ0k8Fm/JyPcZSQ/cFeS3OIuT3kXBj7rl32KlUBL0FC427fP0buyFcs+gb/6S5wbtrIcCE4FyR0eKpIyh6FKtjKtd30Cf/UBsWVndWGndOckZVhFO7Y2ArAJ/NTvbw4c2OKT5IC8AbAJvNW3A7wXR/iU0GrO6OmURimm73kNrH8xW9kmEhg4FWXMzmDF1GxpTFLSWMA6N1ye8YRYJN08tbY+diklSR5qWIHCT/RWwfroR+pUEV9cVtWOpFSYbEPjhtFCX+cUkZGU55eG7xI+5DSaAKPomORFwIsjjSPGEBeSsYYfwZpGjhGWNAr4cpIkMzFy6pSez+CxGtlpGt7UkuR27AsFvLmOaAB7RAnhzeFpAwTRJuv3peDpn2MKPwJ9paHwRZXyIa3wRU0jUphG6GofXtgJ4RIJhxIBV/+aXC+LRY1X3PZhxoEKDrGmay2+zgPrUG5vGIuuuIYjYSuMVK2ikE82TE3XlACyWRULOCoaae78CVRwRMcwmxig78KPE74J0ra+woPq7oMng+i2L9PXA6hfV9ocVv7b3l+/HODXM0r47fSxwQ/8B8js9w7aJPMeYET/qP/tmm9zgjAMxlNabFGoijgncyLL9/+Os0yx8c/dihl32/p7paiXB9q06RPxyLgCyttx/kdPYKw5MH2bvKsns0BmtnpuJdwfZWg1YB0Qxcdm8cqxFDvWoSthmT+5F6wMEorAvWCJhD2E8z45vFxkbB/shuLBbpj2xUq6XWoFg9lNbGfJ1CqoHhDGXdu0hQAGuiRvgyqiBhETBVxMuzkWUhNWvFapxiM2oCqWhsxKnkdQC7gDiU3MmUQwC8AMvs3MCdgBG8tQm6bpEkOxHo5nZejRDLfAxDpsABxqRX7DYJBshzy1Wo5vEdF5kzKbZOGNRctkE7ZDlRvNb5RqKx5+OdXXTl0uuDPQGqytupv8K0Rjr73KiiEDXjU4vJbMrBVwhU6xI5WeV8fgFk+JgkmCJ5Kq8TTIdoFn6obELwDYFIgKfeyjTvZGkPhsCoocHfvGXaGjm5w+0XnftSHxWRS8XW5PV4Z0cuTXvFAAYo4O07LFd6TYU2eXEiUhplxOpwlnfFC9gml5vuTeST/fUpIoDpMB8CpIlvR42AeY093qQOLzKVjvAO53zxdXTZ0iJ/GZFBxuKo65b+WS8RaVi8+K0re77dp3J0ogSPhhCpea3usaRkZ4d/3B2B4Jq7wzMh9GZoEEC2OzQUIGY9MiQcJAfu/f+SKRSCQSiUQikT/FJ/KszkkkGjO4AAAAAElFTkSuQmCC"
        alt="" className="i-header-set" />
    </div>
    <div className="header-login-wrap" style={{ display: "none" }}>
      <div className="header-login">
        <a className="btn-login" href="true">
          登录
        </a>
        <span className="login-tip">
          你可以在登录后同步电脑与手机购物车中的商品
        </span>
      </div>
    </div>
    <div className="header-exchange-wrap">
      <div className="header-exchange">
        <a href="true" id="hideAclick" style={{display: "none" }} />
        <input type="text" className="exch-ipt" placeholder={"礼品兑换处，请输入兑换码"} />
        <input type="button" value="兑换" className="exch-btn" />
      </div>
    </div>
  </header>
  <div className="wrap-cartgrid">
    <div className="cart-item-group">
      <div className="cart-item sd-container" style={{height:"105px"}}>
        <ul className="sd-del-content" style={{height: "105px"}}>
          <li className="chk"><span className="selectwrap"><span className="slct"></span></span></li>
          <li className="item-pic"><a href="#/item/31736"><img
                src="http://i.lifevccdn.com/upload/AppItemExhibit/218577df84f34e9db38c656a5cf297ab.jpg" alt="" />
            </a></li>
          <li className="item-info">
            <p><span className="item-title"><a href="#/item/31736">印花舒适休闲拖鞋</a></span> <span
                className="item-price">￥29</span></p>
            <p><span className="item-spec">雨林,35-36码</span> <span className="item-original hide">￥29</span></p>
            <div className="item-quantity"><span className="tag-act-wrap">

              </span> <span className="quantity">x 1</span></div>
          </li>
          <li className="item-info edit" style={{display: "none"}}>
            <div className="spec-selector">雨林,35-36码</div> <span className="del"></span>
            <div className="quantity-editor"><span className="tag-act-wrap">

              </span> <span className="decrement">-</span> <span type="text" className="quantity-num">1</span> <span
                className="increment">+</span></div>
          </li>
        </ul>
      </div>
      <div className="cart-item sd-container" style={{height: "105px"}}>
        <ul className="sd-del-content" style={{height: "105px"}}>
          <li className="chk"><span className="selectwrap"><span className="slct"></span></span></li>
          <li className="item-pic"><a href="#/item/32969"><img
                src="http://i.lifevccdn.com/upload/AppItemExhibit/aff68e0be5fb4f2890640c8f3ebbd4ea.jpg" alt="" />
            </a></li>
          <li className="item-info">
            <p><span className="item-title"><a href="#/item/32969">时尚潮流夹脚凉拖</a></span> <span
                className="item-price">￥29</span></p>
            <p><span className="item-spec">白色,40码</span> <span className="item-original hide">￥29</span></p>
            <div className="item-quantity"><span className="tag-act-wrap">

              </span> <span className="quantity">x 1</span></div>
          </li>
          <li className="item-info edit" style={{display: "none"}}>
            <div className="spec-selector">白色,40码</div> <span className="del"></span>
            <div className="quantity-editor"><span className="tag-act-wrap">

              </span> <span className="decrement">-</span> <span type="text" className="quantity-num">1</span> <span
                className="increment">+</span></div>
          </li>
        </ul>
      </div>
      <div className="cart-item sd-container" style={{height: "105px"}}>
        <ul className="sd-del-content" style={{height: "105px"}}>
          <li className="chk"><span className="selectwrap"><span className="slct"></span></span></li>
          <li className="item-pic"><a href="#/item/32589"><img
                src="http://i.lifevccdn.com/upload/AppItemExhibit/649fa0c68dba4d22bcfb4bea473bcbef.jpg" alt="" />
            </a></li>
          <li className="item-info">
            <p><span className="item-title"><a href="#/item/32589">无绳摇摇随身杯果汁机</a></span> <span
                className="item-price">￥199</span></p>
            <p><span className="item-spec"></span> <span className="item-original hide">￥199</span></p>
            <div className="item-quantity"><span className="tag-act-wrap">

              </span> <span className="quantity">x 1</span></div>
          </li>
          <li className="item-info edit" style={{display: "none"}}>
            <div className="spec-item"></div> <span className="del"></span>
            <div className="quantity-editor"><span className="tag-act-wrap">

              </span> <span className="decrement">-</span> <span type="text" className="quantity-num">1</span> <span
                className="increment">+</span></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="wrap-cart-panel cart-panle-address">
    <div className="panel-item"><span className="field-tt">送至：</span> <span className="panel-address">上海</span>
      <div className="sect-freight">
        <div className="address-promo">
          <div className="cont">
            <p style={{width: "100%"}}>新会员首单，满39元免运费</p>
            <p className="tip" style={{width: "100%"}}>你还差<span style={{color:"#cc0000"}}>￥39</span>，即可享受<span
                style={{color:"#cc0000"}}>免运费</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="cart-panel">
    <ul>
      <li className="check-all"><span className="selectwrap"><span className="slct"></span> <span className="slct-txt">全选</span></span>
      </li>
      <li className="btn-com disabled"><span className="cart-btn-txt">去结算
          <span>(0)</span></span></li>
      <li className="btn-com del disabled" style={{display: "none"}}><span className="cart-btn-txt">删除</span></li>
      <li className="cart-count">
        <p>合计：
          <em className="stress">￥0</em></p>
        <p className="misc">商品 ￥0 - 优惠 ￥0</p>
      </li>
    </ul>
  </div>
</div>
);
}
}