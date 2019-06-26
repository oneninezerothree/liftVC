import React, { Component } from "react";
import "./Lvgoods.css";


export default class Lvgoods extends Component {
  render() {
    return (
      <div>
        <header id="topbar" className="header">
          <div className="header-content">
            <p className="header-title">全部产品</p>
          </div>
          <div id="wrap" className="search-panel">
            <div id="search-bar">
              <form action="">
                <input
                  type="search"
                  placeholder="搜索商品"
                  className="searchinput"
                />
                <input
                  id="btnCancel"
                  type="button"
                  value="取消"
                  className="sch-cancel"
                />
              </form>
            </div>
          </div>
        </header>
        <div
          id="content-wrap"
          style={{
            position: "absolute",
            width: "100%",
            top: "80px",
            height: "541.6px",
            overflowY: "scroll"
          }}
        >
          <div className="life-module">
            <div className="life-goodsAll">
              <div className="life-goodsBox">
                <div className="life-goodsTip">
                  <dl className="life-goodsMark">全屋家具</dl>
                </div>
                <ul className="life-goodsUl clearFix ">
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/6debc3442bbc43bf933a9cfdcea287fd.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>床和席梦思</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/3187379bdb02425f8039eec01385f881.jpg"
                      alt=""
                      lazy="loaded"
                    />
                    <dl>沙发</dl>
                  </li>
                </ul>
              </div>
              <div className="life-goodsBox">
                <div className="life-goodsTip">
                  <dl className="life-goodsMark">下厨</dl>
                </div>
                <ul className="life-goodsUl clearFix ">
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/a3520eb9079b45fd8e9970d13f6d1c2c.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>厨房小帮手</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/9e883904e00548c88cf86897dea26998.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>厨房电器</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/19b2d676ae164d5dad2397c79660cc93.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>餐具</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img                                                  
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/b6595e78dfe64b8988220f0e1c546d22.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>锅具</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/fba8b746f88d4434816b5ec77475a335.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>水杯水壶</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/8e0d3d3a5ec84bd2a0800e131d782252.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>餐厨美食</dl>
                  </li>
                </ul>
              </div>
              <div className="life-goodsBox">
                <div className="life-goodsTip">
                  <dl className="life-goodsMark">床品</dl>
                </div>
                <ul className="life-goodsUl clearFix ">
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/c38960741a094f4a851945d9773a28bd.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>夏被盖毯</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/64b3800e35f2497aa3791d6c591c7c21.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>凉席</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/d8e7d66c5fe34e4397e2d21abdbc92da.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>安睡枕</dl>
                  </li>
                  <li style={{ height: "138px;" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/1aba7caa64964f32b2a6eb32747378a7.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>拆件随心配</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/b05d364bc6b94b018af401d851033a3b.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>床品套件</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/3ef58f1040a64073aa25c5a097723d63.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>被子床褥</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/59a6ce128a194d6b880bdad421e84b4b.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>盖毯披毯</dl>
                  </li>
                </ul>
              </div>
              <div className="life-goodsBox">
                <div className="life-goodsTip">
                  <dl className="life-goodsMark">家务</dl>
                </div>
                <ul className="life-goodsUl clearFix ">
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/051094f3f9b840d7a29e33cf0ecd0020.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>酵素洗衣液</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/a2a7b14671504c48af028e103a7d990f.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>家庭清洁剂</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/e04a16b67a5143beb70923e5f0551b9a.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>家务工具</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/0d356aab040544a1a35c33e6a2293079.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>储物收纳</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/eb90b42a447c4db0b0e9e72e99cfa95b.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>生活单品</dl>
                  </li>
                </ul>
              </div>
              <div className="life-goodsBox">
                <div className="life-goodsTip">
                  <dl className="life-goodsMark">生活日用</dl>
                </div>
                <ul className="life-goodsUl clearFix ">
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/1913da00fa5243cd87e8e89494985ec2.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>香氛</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/3a8c983c3b58437d9c47cdb33e1894e2.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>文具</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/4edd03e1a5cc4b8cadbc6183ce6a823b.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>椅垫靠垫</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/21ea113d967e4ab7b76d471bd27e08ac.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>旅行箱包</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/eb1caf598025458f9d25328aa016fcfe.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>生活电器</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/b11accfb580a40e3bb32a74558523dd0.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>晴雨伞</dl>
                  </li>
                </ul>
              </div>
              <div className="life-goodsBox">
                <div className="life-goodsTip">
                  <dl className="life-goodsMark">洗沐</dl>
                </div>
                <ul className="life-goodsUl clearFix ">
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/e2c28ee36c3f4a499422225e9e4e6c80.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>Lifevc/Beauty</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/733a10419d904298b851d751005b4337.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>纸品棉品</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/5541e745b3f04fd4810a5c505895dcc0.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>洗沐用品</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/2524c4d94e9f418a8ba7704d8f32494d.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>口腔护理</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/a51dea1a293b41a1b257e16b0e196795.jpg"
                      lazy="loaded"
                      alt="" style={{height:"50px",widhth:"50px"}}
                    />
                    <dl>毛浴巾</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/61fa9ad77c3a408cb18b623f08aae5c1.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>美妆电器</dl>
                  </li>
                </ul>
              </div>
              <div className="life-goodsBox">
                <div className="life-goodsTip">
                  <dl className="life-goodsMark">家居服</dl>
                </div>
                <ul className="life-goodsUl clearFix ">
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/75cd37cfa3de466a88fb81a97d0ba575.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>内衣袜子</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/370bf5aa22974da6b976268469c642d4.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>起居服</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/067c37d73c5243a49d3e18f726901464.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>家居拖鞋</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/f293153b5c1d4a17abd081664095d002.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>婴童服</dl>
                  </li>
                  <li style={{ height: "138px" }}>
                    <img
                      src="http://i.lifevccdn.com/upload/AppIndexIcon/b2050cae8f004ebe908aad5d835d4298.jpg"
                      lazy="loaded"
                      alt=""
                    />
                    <dl>保暖家居服</dl>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
