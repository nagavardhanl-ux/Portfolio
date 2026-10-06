import Image from "next/image";
import { asset } from "@/lib/config";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* -------------------------------------------------------------------------
   Official Full-Color Brand SVGs & Icons
------------------------------------------------------------------------- */

// 1. Lovable — Official pink-to-red gradient heart
function IconLovable(props: IconProps) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" focusable="false" {...props}>
      <defs>
        <linearGradient id="lovable-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF5572" />
          <stop offset="100%" stopColor="#FF3366" />
        </linearGradient>
      </defs>
      <path
        d="M151.083 0c83.413 0 151.061 67.819 151.061 151.467v57.6h50.283c83.413 0 151.082 67.797 151.082 151.466 0 83.691-67.626 151.467-151.082 151.467H0V151.467C0 67.84 67.627 0 151.083 0z"
        fill="url(#lovable-grad)"
      />
    </svg>
  );
}

// 2. Google Antigravity — Official Google 4-color gradient emblem
function IconAntigravity(props: IconProps) {
  return (
    <svg viewBox="0 0 180 180" aria-hidden="true" focusable="false" {...props}>
      <defs>
        <linearGradient id="antigravity-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="40%" stopColor="#9C27B0" />
          <stop offset="75%" stopColor="#EA4335" />
          <stop offset="100%" stopColor="#FBBC04" />
        </linearGradient>
      </defs>
      <path
        d="M144.248 149.062C151.748 154.688 162.998 150.938 152.685 140.625C121.748 110.625 128.31 28.125 89.8727 28.125C51.4352 28.125 57.9977 110.625 27.0602 140.625C15.8102 151.875 27.9977 154.688 35.4977 149.062C64.5602 129.375 62.6852 94.6875 89.8727 94.6875C117.06 94.6875 115.185 129.375 144.248 149.062Z"
        fill="url(#antigravity-grad)"
      />
    </svg>
  );
}

// 3. Claude / Claude Code — Anthropic official Terracotta / Coral
function IconClaude(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
        fill="#D97757"
      />
    </svg>
  );
}

// 4. Hunter.io — Official Hunter vibrant orange
function IconHunter(props: IconProps) {
  return (
    <svg viewBox="0 0 850 850" aria-hidden="true" focusable="false" {...props}>
      <g transform="translate(0, 850) scale(1, -1)">
        <path
          d="m 537.324,496.277 c -18.015,-5.183 -37.879,-5.269 -56.453,-4.484 -21.605,0.914 -44.484,3.645 -64.433,12.512 -16.415,7.293 -29.583,20.453 -22.692,39.461 4.859,13.406 15.629,25.382 28.078,32.132 13.996,7.594 29.375,6.36 43.379,-0.503 15.723,-7.707 28.801,-20.243 40.656,-32.891 6.215,-6.633 12.145,-13.52 17.996,-20.473 2.7,-3.199 21.008,-21.484 13.469,-25.754 z m 299.461,-6.535 c -27.707,6.446 -60.445,4.137 -88.222,8.578 -43.754,7 -108.926,58.016 -144.254,109.871 -24.547,36.032 -36.262,72.731 -55.028,117.45 -13.097,31.214 -41.656,129.941 -81.593,83.73 -16.446,-19.031 -34.856,-81.68 -48.305,-80.797 -9.961,-2.316 -11.586,17.098 -14.738,25.395 -5.723,15.066 -8.758,32.496 -16.426,46.703 -6.129,11.355 -14.176,24.957 -26.5,30.476 -21.957,11.29 -48.43,-22.738 -61.567,-63.089 C 294.535,746.422 256.773,704.48 240.328,694.336 165.504,648.164 15.3281,599.52 0.0117188,437.543 c -0.0625001,-0.672 0,-2.715 2.5429712,-0.875 C 20.4648,449.637 223.613,595.953 93.2383,313.129 13.3672,139.855 399,29.5117 418.824,29.0625 c 2.672,-0.0586 2.477,1.1563 2.567,1.957 30.773,276.5545 334.781,247.4415 405.578,313.6755 70.16,65.629 71.59,129.157 9.816,145.047"
          fill="#FF6738"
        />
      </g>
    </svg>
  );
}

// 5. Apollo — Official Apollo fiery orange solar starburst
function IconApollo(props: IconProps) {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M19.5993 0.0862365L19.605 13.2568C19.6058 15.3375 17.4222 16.6715 15.6079 15.6986L2.58376 8.7153C3.57706 7.05795 4.82616 5.57609 6.27427 4.32386L16.489 13.8945C17.0303 14.4015 17.8835 13.8518 17.6605 13.1398L13.6992 0.493553C15.0326 0.17147 16.4233 0 17.8536 0C18.4428 0 19.0248 0.0296814 19.5993 0.0862365Z"
        fill="#FF6B00"
      />
      <path
        d="M16.0635 36.1087L16.0578 23.0046C16.057 20.9239 18.2407 19.5898 20.0549 20.5627L33.0838 27.5486C32.0838 29.2016 30.8289 30.6786 29.3751 31.925L19.1738 22.3668C18.6326 21.8598 17.7793 22.4095 18.0023 23.1215L21.9486 35.72C20.6338 36.0329 19.263 36.1989 17.8539 36.1989C17.2497 36.1989 16.6523 36.1683 16.0635 36.1087Z"
        fill="#F56523"
      />
      <path
        d="M22.0105 16.77L31.4705 6.39392C30.2362 4.92008 28.7742 3.6486 27.1384 2.63702L20.2306 15.8767C19.2709 17.716 20.5871 19.9298 22.6396 19.9288L35.6183 19.923C35.6775 19.3234 35.7082 18.7151 35.7082 18.0996C35.7082 16.6683 35.5436 15.2761 35.2338 13.9406L22.7549 17.9576C22.0526 18.1837 21.5103 17.3187 22.0105 16.77Z"
        fill="#FF8038"
      />
      <path
        d="M0.0842758 16.3383L13.0237 16.3325C15.0764 16.3317 16.3923 18.5454 15.4327 20.3846L8.56047 33.5561C6.93095 32.547 5.47394 31.2801 4.24344 29.8121L13.653 19.4914C14.1531 18.9427 13.6107 18.0777 12.9084 18.3037L0.485078 22.3029C0.168551 20.954 0 19.5467 0 18.0994C0 17.5051 0.0290814 16.9177 0.0842758 16.3383Z"
        fill="#E45214"
      />
    </svg>
  );
}

// 6. Seamless.AI — official app icon from seamless.ai (public/icons/seamless-webclip.png)
function IconSeamless() {
  return (
    <Image
      src={asset("icons/seamless-webclip.png")}
      alt="Seamless.AI"
      width={36}
      height={36}
      className="tools-tile__img-contain"
    />
  );
}

// 7. YAMM (Yet Another Mail Merge) — Official brand SVG
function IconYAMM(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" aria-hidden="true" focusable="false" {...props}>
      <circle cx="22" cy="22" r="22" fill="#F05B3A" />
      <path
        opacity="0.65"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.42 24.27c0 .51.41.92.92.92h13.04c.51 0 .92-.41.92-.92v-.86H14.42v.86Z"
        fill="#FFFFFF"
      />
      <path
        opacity="0.35"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.07 26.05c0 .51.41.92.92.92h9.74c.51 0 .92-.41.92-.92v-.86H16.07v.86Z"
        fill="#FFFFFF"
      />
      <path
        d="M13.18 10.69a1.4 1.4 0 0 0-.42.78v11.01c0 .51.41.92.92.92h16.36c.51 0 .92-.41.92-.92V11.47a1.4 1.4 0 0 0-.42-.78l-8.18-5.27a.97.97 0 0 0-1 0l-8.18 5.27Z"
        fill="#FFFFFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.39 11.88c.35-.22.35-.72 0-.94l-7.23-4.52a.47.47 0 0 0-.6 0l-7.14 4.55c-.34.22-.34.72 0 .94l7.14 4.54c.18.12.42.12.6 0l7.23-4.57Z"
        fill="#F05B3A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.85 39.16s1.55-1.05 2.8-2.77c.63-.87 1.18-1.91 1.41-3.07.69-3.47-1.38-5.15-4.21-5.15s-4.9 1.68-4.21 5.15c.69 3.47 4.21 5.84 4.21 5.84Z"
        fill="#FFE600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9 34.91s-1.92-1.3-2.29-3.19c-.38-1.89.74-2.81 2.29-2.81 1.54 0 2.67.92 2.29 2.81-.38 1.89-2.29 3.19-2.29 3.19Z"
        fill="#F05B3A"
      />
    </svg>
  );
}

// 8. AIQoD — Official Campaign & Agentic AI logo
function IconAIQoD() {
  return (
    <Image
      src={asset("icons/aiqod.png")}
      alt="AIQoD"
      width={48}
      height={32}
      className="tools-tile__img-contain"
    />
  );
}

// 9. ZeroBounce — Official ZeroBounce BIMI SVG
function IconZeroBounce(props: IconProps) {
  return (
    <svg viewBox="0 0 300 300" aria-hidden="true" focusable="false" {...props}>
      <rect width="300" height="300" rx="60" fill="#573BFF" />
      {/* Dynamic bouncing wave & envelope paper plane */}
      <path
        d="M43.5 118c21.7-5.6 58.6-9.6 72.3 21.3.2.4.6.6 1 .4.2-.1.4-.3.4-.5 1-4 5.2-11 20.5-16.6.4-.2.8 0 1 .4s0 .8-.4 1c-7.2 4.2-17.3 11.2-20.9 19.6 0 0-.2 1-.7.1 0 0-16.6-33.6-72.9-24.4-.4 0-.7-.4-.7-.8.1-.4.3-.6.7-.9Z"
        fill="#FBDD46"
        fillRule="evenodd"
      />
      <g transform="translate(68, 10)">
        <path
          d="m99.8 106.2-8.7 8.9c-.2.2-.5.3-.8.2l-11.5-4.8c-.4-.2-.6-.6-.4-1 .1-.2.3-.4.6-.5l20.1-4.2c.4-.1.8.1.9.5.1.4 0 .7-.2.9m-22.1 20.9-3.1-15.1c-.1-.4.2-.8.6-.9h.4l14.9 6.2c.3.1.6.1.8-.2l11.4-11.5c.3-.3.8-.3 1.1 0 .1.1.2.2.2.4l2.4 11.1-1.4-14.9c0-.4-.4-.7-.8-.7h-.1l-31.3 6.4c-.4.1-.7.5-.6.9l4.2 20.3c.1.4.5.7.9.6l29.5-6-28.2 4.1c-.5.2-.9 0-1-.5"
          fill="#FFFFFF"
          fillRule="evenodd"
        />
      </g>
      <text
        x="150"
        y="235"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="34"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        letterSpacing="2"
      >
        ZEROBOUNCE
      </text>
    </svg>
  );
}

// 10. NeverBounce — Official high-resolution 256x256 mark
function IconNeverBounce() {
  return (
    <Image
      src={asset("icons/neverbounce.png")}
      alt="NeverBounce"
      width={40}
      height={40}
      className="tools-tile__img-contain"
    />
  );
}

// 11. ChatGPT (OpenAI) — current monochrome mark; follows the text colour (white on dark, black on light)
function IconOpenAI(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
        fill="currentColor"
      />
    </svg>
  );
}

// 12. Perplexity — Official Perplexity Teal
function IconPerplexity(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"
        fill="#20B8CD"
      />
    </svg>
  );
}

// 13. Google Search Console — Official Google Multi-Color Emblem
function IconGoogleSearchConsole(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      {/* Top frame & search bar in Google Blue */}
      <path
        d="M8.548 1.156L6.832 2.872v1.682h1.716zm0 3.398v.035H6.832v-.035H3.386L0 7.844v3.577h2.826V8.94c0-.525.429-.954.954-.954h16.476c.525 0 .954.43.954.954v2.48h2.754V7.844l-3.386-3.29H17.3v.035h-1.717v-.035zm7.035 0H17.3V2.872l-1.717-1.716zM8.679 1.188V2.84h6.773V1.188z"
        fill="#4285F4"
      />
      {/* Search Console Header ribbon */}
      <path
        d="M20.15 8.258a.834.834 0 00-.132.01l-.543.002c-5.216.014-10.432-.008-15.648.01-.435-.063-.794.436-.716.883v2.264h17.812c-.016-.888.045-1.782-.034-2.666-.104-.342-.427-.502-.739-.502z"
        fill="#34A853"
      />
      {/* Left and right frame in Blue / Yellow */}
      <path d="M.036 11.645v9.156c0 1.05.858 1.908 1.907 1.908h.883V11.645z" fill="#4285F4" />
      <path d="M21.21 11.645v11.064h.882c1.05 0 1.908-.858 1.908-1.908v-9.156z" fill="#FBBC04" />
      {/* Center chart / inspector */}
      <path d="M4.057 13.133v6.85h6.137v-6.85z" fill="#4285F4" />
      <path
        d="M17.3 13.154v3.777l-1.708.977-1.708-.977v-3.758a4.006 4.006 0 000 7.23v2.441h3.457v-2.442a4.006 4.006 0 00-.041-7.248z"
        fill="#EA4335"
      />
      <path d="M4.057 21.393v1.43h7.925v-1.43z" fill="#34A853" />
    </svg>
  );
}

// 14. Google Analytics 4 — Official GA4 Orange & Amber
function IconGoogleAnalytics(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      {/* Right Tall Bar in Amber */}
      <path
        d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619z"
        fill="#F9AB00"
      />
      {/* Left Base Dot in Deep Orange */}
      <path
        d="M4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726z"
        fill="#E37400"
      />
      {/* Center Medium Bar in Vibrant Orange */}
      <path
        d="M12.0054 9.045c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"
        fill="#F9AB00"
      />
    </svg>
  );
}

// 15. Google Keyword Planner — Official Google Ads 3-Color Emblem
function IconGoogleAds(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      {/* Yellow Angled Oval */}
      <path
        d="M23.4641 16.9287L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644z"
        fill="#FBBC04"
      />
      {/* Blue Angled Pill */}
      <path
        d="M7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"
        fill="#4285F4"
      />
      {/* Green Disc */}
      <circle cx="4" cy="18.929" r="4" fill="#34A853" />
    </svg>
  );
}

// 17. Canva — Official Cyan-to-Purple Vibrant Gradient
function IconCanva(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <defs>
        <linearGradient id="canva-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#canva-grad)" />
      <path
        d="M6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 18. HeyGen — HeyGen's mark in its brand gradient (public/icons/heygen-logo.png)
function IconHeyGen() {
  return (
    <Image src={asset("icons/heygen-logo.png")} alt="HeyGen" width={36} height={36} className="tools-tile__img-contain" />
  );
}

// 19. Google Flow — official Flow favicon from flow.google.com: white on dark, black on light
function IconGoogleFlow() {
  return (
    <>
      <Image
        src={asset("icons/flow-w.png")}
        alt="Google Flow"
        width={40}
        height={32}
        className="tools-tile__img-contain theme-dark-only"
      />
      <Image
        src={asset("icons/flow-b.png")}
        alt="Google Flow"
        width={40}
        height={32}
        className="tools-tile__img-contain theme-light-only"
      />
    </>
  );
}

/* -------------------------------------------------------------------------
   Group Definitions & Tool Mapping
------------------------------------------------------------------------- */

interface ToolItem {
  name: string;
  Icon: ComponentType<IconProps> | ComponentType;
}

interface ToolGroup {
  heading: string;
  caption: string;
  tools: ToolItem[];
}

const groups: ToolGroup[] = [
  {
    heading: "Build websites",
    caption: "Building and shipping websites.",
    tools: [
      { name: "Lovable", Icon: IconLovable },
      { name: "Antigravity", Icon: IconAntigravity },
      { name: "Claude Code", Icon: IconClaude },
    ],
  },
  {
    heading: "Lead generation",
    caption: "Target lists, prospect data and enrichment.",
    tools: [
      { name: "Hunter.io", Icon: IconHunter },
      { name: "Apollo", Icon: IconApollo },
      { name: "Seamless AI", Icon: IconSeamless },
    ],
  },
  {
    heading: "Email sending & campaigns",
    caption: "Mail merge, automated sequences and outreach.",
    tools: [
      { name: "YAMM", Icon: IconYAMM },
      { name: "AIQoD", Icon: IconAIQoD },
    ],
  },
  {
    heading: "Email validation",
    caption: "List cleaning, deliverability and bounce prevention.",
    tools: [
      { name: "ZeroBounce", Icon: IconZeroBounce },
      { name: "NeverBounce", Icon: IconNeverBounce },
      { name: "Hunter.io", Icon: IconHunter },
    ],
  },
  {
    heading: "Research",
    caption: "Market, competitor and product research.",
    tools: [
      { name: "ChatGPT", Icon: IconOpenAI },
      { name: "Claude", Icon: IconClaude },
      { name: "Perplexity", Icon: IconPerplexity },
    ],
  },
  {
    heading: "SEO & analytics",
    caption: "Search visibility, keyword strategy and performance.",
    tools: [
      { name: "Google Search Console", Icon: IconGoogleSearchConsole },
      { name: "Google Analytics 4", Icon: IconGoogleAnalytics },
      { name: "Google Keyword Planner", Icon: IconGoogleAds },
    ],
  },
  {
    heading: "Images & creatives",
    caption: "Visual assets, AI generations and creative design.",
    tools: [
      { name: "Canva", Icon: IconCanva },
      { name: "ChatGPT", Icon: IconOpenAI },
      { name: "Google Flow", Icon: IconGoogleFlow },
    ],
  },
  {
    heading: "Video",
    caption: "AI avatars, product videos and motion.",
    tools: [
      { name: "HeyGen", Icon: IconHeyGen },
      { name: "Google Flow", Icon: IconGoogleFlow },
    ],
  },
];

export default function ToolsGrid() {
  return (
    <div className="tools-grid">
      {groups.map((group, i) => (
        <div
          key={group.heading}
          className="tools-group reveal"
          style={{ ["--delay" as string]: `${(i % 2) * 50}ms` }}
        >
          <div className="tools-group__header">
            <h3 className="tools-group__heading">{group.heading}</h3>
            <p className="tools-group__caption">{group.caption}</p>
          </div>
          <ul
            className="tools-tiles"
            role="list"
            aria-label={`Tools for ${group.heading}`}
          >
            {group.tools.map((tool, idx) => (
              <li
                key={`${tool.name}-${idx}`}
                className="tools-tile"
                title={tool.name}
                aria-label={tool.name}
                tabIndex={0}
              >
                <span className="tools-tile__icon" aria-hidden="true">
                  <tool.Icon />
                </span>
                <span className="tools-tile__tooltip" role="tooltip">
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
