(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{218:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=(a(223),a(4)),o=a.n(r),s=(a(35),a(2)),l=a(222),d=a.n(l),c=a(8),u=a(43);function f(){var e=o()(["\n    margin: 0 10px 20px;\n    font-size: 90px;\n  "]);return f=function(){return e},e}var p=Object(s.d)("div").withConfig({componentId:"ryw1yh-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]),h=Object(s.d)("p").withConfig({componentId:"ryw1yh-1"})(["",""],function(e){var t=e.theme;return Object(s.c)(["margin:0;align-self:end;color:",";font-size:24px;font-weight:",";animation:"," 0.6s 0.3s ease both;"],t.colors.p700,t.fontWeight.bold,u.b.fadeInUp)}),m=Object(s.d)("h1").withConfig({componentId:"ryw1yh-2"})(["",""],function(e){var t=e.theme;return Object(s.c)(["color:",";font-size:75px;font-weight:",";margin:0;animation:"," 0.6s 0.4s ease both;",";"],t.colors.p700,t.fontWeight.bold,u.b.fadeInUp,t.mq.medium(f()))}),g=Object(s.d)("p").withConfig({componentId:"ryw1yh-3"})(["",""],function(e){var t=e.theme;return Object(s.c)(["color:",";font-size:23px;font-weight:",";animation:"," 0.6s 0.5s ease both;"],t.colors.p700,t.fontWeight.bold,u.b.fadeInUp)}),b=Object(s.d)(d.a).withConfig({componentId:"ryw1yh-4"})(["",""],function(e){var t=e.theme;return Object(s.c)(["border-radius:50%;left:0;top:0;border:3px solid ",";margin:0;animation:"," 0.6s 0.2s ease both;"],t.colors.p600,u.b.fadeInDown)});var y=function(e){var t=e.avatar;return n.a.createElement(p,null,n.a.createElement(b,{fixed:t.childImageSharp.fixed,alt:c.c.MY_USERNAME}),n.a.createElement(h,null,c.d.HEY),n.a.createElement(m,null,c.d.IM_GUY),n.a.createElement(g,null,c.d.WHAT_I_DO))},w=(a(110),a(47)),v=a.n(w),S=a(3),E=a.n(S),I=a(45),L=Object(s.d)("div").withConfig({componentId:"mbdha2-0"})(["display:flex;justify-content:center;align-items:center;animation:"," 0.6s 0.6s ease both;"],u.b.fadeInUp),R=Object(s.d)("a").withConfig({componentId:"mbdha2-1"})(["cursor:pointer;box-shadow:none;"]),x=Object(s.d)(function(e){var t=e.component,a=v()(e,["component"]);return n.a.cloneElement(t,a)}).withConfig({componentId:"mbdha2-2"})(["",""],function(e){var t=e.theme;return Object(s.c)(["font-size:20px;color:",";margin:0 10px;transition:color 250ms cubic-bezier(0.4,0,0.2,1) 0s,transform ",";:hover{transform:translate3d(0px,-1px,0px);color:",";}"],t.colors.p700,t.transitions.default,t.colors.p600)});function j(e){var t=e.twitter,a=e.github,i=e.linkedin,r=e.medium,o=[{Icon:I.b,url:a,name:"github"},{Icon:I.e,url:r,name:"medium"},{Icon:I.f,url:t,name:"twitter"},{Icon:I.d,url:i,name:"linkedin"}];return n.a.createElement(L,null,o.map(function(e,t){var a=e.Icon,i=e.url,r=e.name;return n.a.createElement(R,{"aria-label":r,key:t,href:i,target:"_blank",rel:"noopener"},n.a.createElement(x,{component:n.a.createElement(a,null)}))}))}j.propTypes={twitter:E.a.string.isRequired,github:E.a.string.isRequired,linkedin:E.a.string.isRequired,medium:E.a.string.isRequired};var z=j,O=a(221);a.d(t,"pageQuery",function(){return k});t.default=function(e){e.location;var t=e.data,a=t.avatar,r=t.site.siteMetadata.social;return n.a.createElement(i.Fragment,null,n.a.createElement(O.a,{title:"Home",keywords:["guylivni, guy livni site"]}),n.a.createElement(y,{avatar:a}),n.a.createElement(z,r))};var k="3255858939"},220:function(e){e.exports={data:{site:{siteMetadata:{title:"Guy's personal site",description:"Personal site by Guy Livni.",author:"Guy Livni"}}}}},221:function(e,t,a){"use strict";var i=a(220),n=a(1),r=a.n(n),o=a(3),s=a.n(o),l=a(72),d=a.n(l);function c(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title,l=i.data.site,c=t||l.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var u=c;t.a=u},222:function(e,t,a){"use strict";var i=a(14);t.__esModule=!0,t.default=void 0;var n,r=i(a(12)),o=i(a(48)),s=i(a(47)),l=i(a(108)),d=i(a(1)),c=i(a(3)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+"<img "+s+l+a+n+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,o=e.onLoad,c=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:n},u,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.Tag,v=e.itemProp,S="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),I=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var R=h;return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),S&&d.default.createElement(w,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),R.base64&&d.default.createElement(b,(0,l.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(b,(0,l.default)({src:R.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:R.sizes,src:R.src,srcSet:R.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(m){var x=m,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},r);return"inherit"===r.display&&delete j.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},S&&d.default.createElement(w,{title:t,style:{backgroundColor:S,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),x.base64&&d.default.createElement(b,(0,l.default)({src:x.base64},L)),x.tracedSVG&&d.default.createElement(b,(0,l.default)({src:x.tracedSVG},L)),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement(b,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,srcSet:x.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=y;t.default=S},223:function(e,t,a){"use strict";a(109)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-pages-index-js-1e163a72bf6c61fbff52.js.map