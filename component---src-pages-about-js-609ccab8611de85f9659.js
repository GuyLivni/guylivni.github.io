(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return O});var i=a(4),r=a.n(i),n=a(1),s=a.n(n),o=a(222),l=a.n(o),d=a(2),c=a(221),u=a(8);function f(){var e=r()(["\n     width: 80%;\n  "]);return f=function(){return e},e}function p(){var e=r()(["\n    font-size: 2.5rem;\n  "]);return p=function(){return e},e}function h(){var e=r()(["\n    width: 70%;\n  "]);return h=function(){return e},e}function m(){var e=r()(["\n     width: 30%;\n     padding-right: 20px;\n  "]);return m=function(){return e},e}function g(){var e=r()(["\n    display: flex;\n  "]);return g=function(){return e},e}var b=Object(d.d)("div").withConfig({componentId:"sc-2e5mr-0"})(["",""],function(e){var t=e.theme;return Object(d.c)(["",";"],t.mq.huge(g()))}),y=Object(d.d)("div").withConfig({componentId:"sc-2e5mr-1"})(["",""],function(e){var t=e.theme;return Object(d.c)(["",";"],t.mq.huge(m()))}),w=Object(d.d)("div").withConfig({componentId:"sc-2e5mr-2"})(["",""],function(e){var t=e.theme;return Object(d.c)(["",";"],t.mq.huge(h()))}),v=Object(d.d)("h1").withConfig({componentId:"sc-2e5mr-3"})(["",""],function(e){var t=e.theme;return Object(d.c)(["margin-top:0;margin-bottom:1rem;font-size:3rem;color:",";"],t.colors.p600)}),S=Object(d.d)("h2").withConfig({componentId:"sc-2e5mr-4"})(["",""],function(e){var t=e.theme;return Object(d.c)(["margin-top:0;color:",";",";"],t.colors.p400,t.mq.huge(p()))}),E=Object(d.c)(["left:0;top:0;margin-bottom:20px;"]),L=Object(d.d)(l.a).withConfig({componentId:"sc-2e5mr-5"})(["",""],E),I=Object(d.d)("p").withConfig({componentId:"sc-2e5mr-6"})(["",""],function(e){var t=e.theme;return Object(d.c)(["color:",";",";"],t.colors.textColor,t.mq.huge(f()))});t.default=function(e){e.location;var t=e.data,a=t.avatar,i=t.site.siteMetadata.author;return s.a.createElement(b,null,s.a.createElement(c.a,{title:"About"}),s.a.createElement(y,null,s.a.createElement(v,null,u.a.IM_GUY),s.a.createElement(S,null,u.a.ABOUT_TITLE)),s.a.createElement(w,null,s.a.createElement(L,{fluid:a.childImageSharp.fluid,alt:i}),s.a.createElement(I,null,u.a.ABOUT_ME)))};var O="3030277233"},220:function(e){e.exports={data:{site:{siteMetadata:{title:"Guy's personal site",description:"Personal site by Guy Livni.",author:"Guy Livni"}}}}},221:function(e,t,a){"use strict";var i=a(220),r=a(1),n=a.n(r),s=a(3),o=a.n(s),l=a(72),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=i.data.site,c=t||l.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired};var u=c;t.a=u},222:function(e,t,a){"use strict";var i=a(14);t.__esModule=!0,t.default=void 0;var r,n=i(a(12)),s=i(a(48)),o=i(a(47)),l=i(a(108)),d=i(a(1)),c=i(a(3)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+"<img "+o+l+a+r+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.Tag,v=e.itemProp,S="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),L=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),I={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var O=h;return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),S&&d.default.createElement(w,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),O.base64&&d.default.createElement(b,(0,l.default)({src:O.base64},I)),O.tracedSVG&&d.default.createElement(b,(0,l.default)({src:O.tracedSVG},I)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:O.sizes,src:O.src,srcSet:O.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}if(m){var j=m,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},S&&d.default.createElement(w,{title:t,style:{backgroundColor:S,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),j.base64&&d.default.createElement(b,(0,l.default)({src:j.base64},I)),j.tracedSVG&&d.default.createElement(b,(0,l.default)({src:j.tracedSVG},I)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(b,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,srcSet:j.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-pages-about-js-609ccab8611de85f9659.js.map