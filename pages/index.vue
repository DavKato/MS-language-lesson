<template>
  <div id="top">
    <nav class="nav nav-top">
      <p
        v-scroll-to="{ el: '#top', duration: 500 }"
        class="nav-top-text"
        title="scroll to top"
      >{{ $t('navTitle')}}</p>
      <ContactLink class="nav-top-contact" />
      <LangSwitch v-show="$vssWidth >= $data.$tab" />

      <no-ssr>
        <div class="ie" v-if="ie">{{ $t('ie') }}</div>
      </no-ssr>
    </nav>

    <header class="header">
      <picture>
        <source
          :media="`(min-width: ${$data.$pc}px)`"
          srcset="~/assets/img/pc/1x/apple.png 1440w, ~/assets/img/pc/2x/apple.png 2880w"
          sizes="100vw"
        />
        <img
          src="~/assets/img/1x/apple.png"
          srcset="~/assets/img/2x/apple.png 2x, ~/assets/img/3x/apple.png 3x"
          alt
          class="header-bg-top"
        />
      </picture>
      <div class="hero">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-sub">{{ sub }}</p>
      </div>
    </header>

    <img
      class="branch1"
      src="~/assets/img/1x/branch.png"
      srcset="~/assets/img/1x/branch.png 401w, ~/assets/img/2x/branch.png 802w, ~/assets/img/pc/1x/branch.png 1000w, ~/assets/img/3x/branch.png 1203w, ~/assets/img/pc/2x/branch.png 2000w"
      sizes="(max-width: 1000px) 96vw, 1000px"
      alt
    />

    <main class="main">
      <section class="about">
        <div class="title about-title">
          <no-ssr>
            <img
              v-if="$vssWidth >= $data.$tab"
              class="title-leaf"
              src="~/assets/img/1x/leaf-y.png"
              srcset="~/assets/img/2x/leaf-y.png 2x, ~/assets/img/3x/leaf-y.png 3x"
              alt
            />
          </no-ssr>
          <h2 class="title-prime">{{ $t('aboutTitle') }}</h2>
          <!-- <p class="title-sub">{{ $t('aboutSub') }}</p> -->
        </div>

        <picture class="about-img">
          <source
            :media="`(min-width: ${$data.$pc}px)`"
            srcset="~/assets/img/pc/1x/marina.png 1x, ~/assets/img/pc/2x/marina.png 2x"
          />
          <img
            src="~/assets/img/1x/marina.png"
            srcset="~/assets/img/1x/marina.png 415w, ~/assets/img/2x/marina.png 830w, ~/assets/img/3x/marina.png 1245w"
            sizes="(max-width: 600) 100vw, 600px"
            alt="Marina's picture in Shibuya"
            title="Marina's picture in Shibuya"
          />
        </picture>

        <div class="about-contents">
          <p class="about-contents-text">{{ $t('intro.b1') }}</p>
          <p class="about-contents-text">{{ $t('intro.b2') }}</p>
          <p class="about-contents-text">{{ $t('intro.b3') }}</p>
          <p class="about-contents-text">{{ $t('intro.b4') }}</p>
          <p class="about-contents-text">{{ $t('intro.b5') }}</p>
        </div>
      </section>

      <img
        class="branch2"
        src="~/assets/img/1x/branch.png"
        srcset="~/assets/img/1x/branch.png 401w, ~/assets/img/2x/branch.png 802w, ~/assets/img/pc/1x/branch.png 1000w, ~/assets/img/3x/branch.png 1203w, ~/assets/img/pc/2x/branch.png 2000w"
        sizes="(max-width: 1000px) 96vw, 1000px"
        alt
      />

      <section class="course">
        <div class="title course-title">
          <img
            class="title-leaf"
            src="~/assets/img/pc/1x/leaf-y.png"
            srcset="~/assets/img/2x/leaf-y.png 2x, ~/assets/img/3x/leaf-y.png 3x"
            alt
          />
          <h2 class="title-prime">{{ $t('courseTitle') }}</h2>
        </div>

        <div class="course-cards">
          <no-ssr>
            <img
              v-if="$vssWidth < $data.$tab"
              class="course-cards-flower"
              src="~/assets/img/1x/flower.png"
              srcset="~/assets/img/2x/flower.png 2x, ~/assets/img/3x/flower.png 3x"
              alt
            />
          </no-ssr>

          <div class="card" @mouseenter="hover0 = true" @mouseleave="hover0 = false">
            <div class="card-side card-side__front" :class="{'card-hovered-front': hover0}">
              <h3 class="card-title card-title-front">{{ $t('card.b1') }}</h3>
              <span class="card-yellow-line"></span>
            </div>
            <div class="card-side card-side__back" :class="{'card-hovered-back': hover0}">
              <div class="card-desc">
                <h4 class="card-desc-price">
                  <b>40€</b>
                  /{{ $t('card.unit1')}}
                </h4>
                <p class="card-desc-note">{{ $t('card.note1') }}</p>
              </div>
            </div>
          </div>

          <div class="card" @mouseover="hover1 = true" @mouseleave="hover1 = false">
            <div class="card-side card-side__front" :class="{'card-hovered-front': hover1}">
              <h3 class="card-title card-title-front">{{ $t('card.b2') }}</h3>
              <span class="card-yellow-line"></span>
            </div>
            <div class="card-side card-side__back" :class="{'card-hovered-back': hover1}">
              <div class="card-desc">
                <h4 class="card-desc-price">
                  <b>0.2€</b>
                  /{{ $t('card.unit2')}}
                </h4>
                <p class="card-desc-note">{{ $t('card.note2') }}</p>
              </div>
            </div>
          </div>

          <div
            class="card"
            v-show="$vssWidth >= $data.$tab"
            @mouseover="hover2 = true"
            @mouseleave="hover2 = false"
          >
            <div class="card-side card-side__front" :class="{'card-hovered-front': hover2}">
              <img
                class="card-flowers card-flowers-1"
                src="~/assets/img/pc/1x/flower.png"
                srcset="~/assets/img/pc/1x/flower.png 182w, ~/assets/img/pc/2x/flower.png 364w"
                sizes="182px"
                alt
              />
            </div>
            <div
              class="card-side card-side__back card-side__back"
              :class="{'card-hovered-back': hover2}"
            >
              <img
                class="card-back"
                src="~/assets/img/pc/1x/class.png"
                srcset="~/assets/img/pc/1x/class.png 266w, ~/assets/img/pc/2x/class.png 532w"
                sizes="266px"
                alt
              />
            </div>
          </div>

          <div
            class="card"
            v-show="$vssWidth >= $data.$tab"
            @mouseover="hover3 = true"
            @mouseleave="hover3 = false"
          >
            <div class="card-side card-side__front" :class="{'card-hovered-front': hover3}">
              <img
                class="card-flowers card-flowers-2"
                src="~/assets/img/pc/1x/flower.png"
                srcset="~/assets/img/pc/1x/flower.png 182w, ~/assets/img/pc/2x/flower.png 364w"
                sizes="182px"
                alt
              />
            </div>
            <div
              class="card-side card-side__back card-side__back"
              :class="{'card-hovered-back': hover3}"
            >
              <img
                class="card-back"
                src="~/assets/img/pc/1x/lasagna.png"
                srcset="~/assets/img/pc/1x/lasagna.png 266w, ~/assets/img/pc/2x/lasagna.png 532w"
                sizes="266px"
                alt
              />
            </div>
          </div>

          <div class="card" @mouseover="hover4 = true" @mouseleave="hover4 = false">
            <div class="card-side card-side__front" :class="{'card-hovered-front': hover4}">
              <h3 class="card-title card-title-front">{{ $t('card.b3') }}</h3>
              <span class="card-yellow-line"></span>
            </div>
            <div class="card-side card-side__back" :class="{'card-hovered-back': hover4}">
              <div class="card-desc">
                <h4 class="card-desc-price">
                  <b>50€</b>
                  /{{ $t('card.unit3')}}
                </h4>
                <p class="card-desc-note">{{ $t('card.note3') }}</p>
              </div>
            </div>
          </div>

          <div class="card" @mouseover="hover5 = true" @mouseleave="hover5 = false">
            <div class="card-side card-side__front" :class="{'card-hovered-front': hover5}">
              <h3 class="card-title card-title-front">{{ $t('card.b4') }}</h3>
              <span class="card-yellow-line"></span>
            </div>
            <div class="card-side card-side__back" :class="{'card-hovered-back': hover5}">
              <div class="card-desc">
                <h4 class="card-desc-price">
                  <b>40€</b>
                  /{{ $t('card.unit3')}}
                </h4>
                <p class="card-desc-note">{{ $t('card.note4') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <picture>
          <source
            :media="`(min-width: ${$data.$pc}px)`"
            srcset="~/assets/img/pc/1x/tree.png 1440w, ~/assets/img/pc/2x/tree.png 2880w"
            sizes="100vw"
          />
          <img
            class="contact-bg"
            src="~/assets/img/1x/tree.png"
            srcset="~/assets/img/2x/tree.png 2x, ~/assets/img/3x/tree.png 3x"
            alt
          />
        </picture>
        <div class="title contact-title">
          <img
            class="title-leaf contact-title-leaf"
            src="~/assets/img/pc/1x/leaf-w.png"
            srcset="~/assets/img/2x/leaf-w.png 2x, ~/assets/img/3x/leaf-w.png 3x"
            alt
          />
          <h2 class="title-prime">{{ $t('contactTitle') }}</h2>
        </div>
        <div class="contact-contents">
          <p class="contact-contents-intro">{{ $t('contactIntro') }}</p>
          <a
            target="_blank"
            href="mailto:rosinapilonato@gmail.com"
            class="contact-contents-address"
            title="Jump to your default mail client"
          >rosinapilonato@gmail.com</a>
        </div>
      </section>
    </main>

    <footer class="footer">2019 &copy; OliAncho</footer>

    <nav class="nav nav-bottom" v-show="$vssWidth < $data.$tab">
      <LangSwitch />
    </nav>
  </div>
</template>

<style lang="scss" scoped>
//kind of GLOBAL
////////////////////////////////////////////////////////////
#top {
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main {
  @include respond("tab") {
    margin-top: -4rem;
  }
}

.branch1 {
  width: 96%;
  max-width: 1000px;
  margin-top: -7.2rem;
  object-fit: contain;
  transform: rotate(180deg);

  @include respond("tab") {
    margin-top: -13rem;
  }
  @include respond("pc") {
    margin-top: -18rem;
  }
}

.branch2 {
  width: 96%;
  max-width: 1000px;
  object-fit: contain;
  float: right;
}

.title {
  position: relative;
  margin-left: 16.4%;
  @include respond("tab") {
    margin-left: 18%;
  }
  @include respond("pc") {
    margin-left: 0;
  }

  &-leaf {
    position: absolute;
    top: -7.5rem;
    left: -7.5rem;
    width: 26rem;
    object-fit: contain;
    transform: rotate(30deg);
    z-index: -1;

    @include respond("tab") {
      width: 37rem;
      top: -11rem;
      left: -12rem;
    }
    @include respond("pc") {
      width: 45rem;
      top: -13rem;
      left: -12rem;
    }
  }
  &-prime {
    font-size: 2.3rem;

    @include respond("tab") {
      font-size: 2.7rem;
      line-height: 1.3;
    }
    @include respond("pc") {
      font-size: 3.2rem;
    }
  }
}
//NAVBAR
////////////////////////////////////////////////////////////
.nav {
  height: 4.4rem;
  width: 100%;
  position: fixed;
  background: rgba($brown-p, 0.8);
  display: flex;
  align-items: center;
  z-index: 10;

  @include respond("tab") {
    height: 5.4rem;
  }

  &-top {
    top: 0;
    left: 0;
    padding: 0 1rem;
    justify-content: space-between;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

    &-text {
      color: #fff;
      font-size: 1.5rem;
      white-space: pre-wrap;
      line-height: 1.1;
      cursor: pointer;
      @include respond("tab") {
        font-size: 1.7rem;
      }
      @include respond("pc") {
        font-size: 1.9rem;
      }
    }

    &-contact {
      height: 2.4rem;
      object-fit: contain;
      cursor: pointer;
      transition: transform 0.2s, filter 0.2s;

      &:hover {
        @include iconHover;
      }
      &:active {
        @include iconActive;
      }
      @include respond("tab") {
        margin-left: 7.5rem;
        margin-right: auto;
        height: 3rem;
      }
    }
  }
  &-bottom {
    bottom: 0;
    left: 0;
    justify-content: center;
  }
}
//HEADER
////////////////////////////////////////////////////////
.header {
  height: 87vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @include respond("pc") {
    height: 115vh;
  }

  &-bg-top {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;

    @include respond("pc") {
    }
  }
}

.hero {
  width: 100%;
  background: rgba(#e8e9aa, 0.8);
  color: #2176ff;
  padding: 2rem 2.4rem 1rem;
  @include respond("tab") {
    padding: 4rem 2.4rem 3rem;
  }
  @include respond("pc") {
    width: 70%;
    min-width: 860px;
    text-align: right;
    padding: 3.4rem 4rem;
  }

  &-title {
    white-space: pre-wrap;
    font-size: 3.2rem;
    line-height: 1.3;
    letter-spacing: 0.1rem;
    @include respond("pc") {
      font-size: 4.5rem;
    }
  }

  &-sub {
    font-size: 2.5rem;
    margin-top: 1.4rem;
    @include respond("pc") {
      font-size: 3rem;
      margin-left: 0;
    }
  }
}
//ABOUT
/////////////////////////////////////////////////////////////
.about {
  margin-top: -5rem;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 1.6rem;

  @include respond("tab") {
    grid-gap: 4.7rem;
    margin-top: -5.3rem;
  }
  @include respond("pc") {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: minmax(min-content, max-content) 492px;
    grid-gap: 5.6rem 4.2rem;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 5% 0 9%;
  }

  &-title {
    @include respond("pc") {
      grid-row: 1;
      grid-column: 1;
    }
  }

  &-img {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 600px;
    @include respond("pc") {
      grid-row: 1 / span 2;
      grid-column: 2;
      width: 400px;
      margin: 0;
      margin-top: 11rem;
      box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.3);

      &::after {
        content: "";
        position: absolute;
        top: -80px;
        right: -70px;
        width: 100%;
        height: 100%;
        background-color: $brown-p;
        z-index: -1;
      }
    }

    & > img {
      width: 100%;
      object-fit: contain;
    }
  }

  &-contents {
    width: 90%;
    max-width: 620px;
    margin: 0 auto;
    @include respond("pc") {
      grid-row: 2;
      grid-column: 1;
      width: 100%;
      margin: 0;
    }

    &-text {
      font-size: 1.5rem;
      white-space: pre-wrap;
      line-height: 2;
      letter-spacing: 0.1px;
      @include respond("tab") {
        font-size: 1.7rem;
        line-height: 1.5;
        letter-spacing: 0.2px;
      }
      @include respond("pc") {
        font-size: 1.9rem;
        letter-spacing: 0.4px;
      }

      &:not(:last-child) {
        margin-bottom: 2.2rem;
      }
    }
  }
}
//CARDS
/////////////////////////////////////////////////////////////
.course {
  margin-top: 2rem;
  clear: right;

  &-title {
    @include respond("pc") {
      margin-left: 12%;
    }
  }

  &-cards {
    margin: 3.5rem auto;
    display: grid;
    grid-template-rows: repeat(2, calc(12rem + 10vw));
    grid-template-columns: repeat(2, calc(12rem + 10vw));
    grid-gap: calc(0.8rem + 3vw);
    justify-content: center;
    position: relative;

    @include respond("tab") {
      grid-template-columns: repeat(3, calc(12rem + 10vw));
      margin: 4rem auto 7rem;
    }
    @include respond("pc") {
      grid-template-rows: repeat(2, calc(12rem + 12vw));
      grid-template-columns: repeat(3, calc(12rem + 12vw));
      margin: 6rem auto 12rem;
    }

    &-flower {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(7.5rem + 3vw);
      object-fit: contain;
    }
  }
}

.card {
  position: relative;

  &-side {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    backface-visibility: hidden;
    transition: transform 0.8s ease;
    perspective: 130rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

    &__front {
      justify-content: flex-end;
    }

    &__back {
      transform: rotateY(180deg);
      justify-content: center;
    }
  }

  &-hovered-front {
    transform: rotateY(180deg);
  }
  &-hovered-back {
    transform: rotateY(0deg);
  }

  &-title {
    white-space: pre;
    text-align: center;
    margin-bottom: 1.2rem;
    height: 5rem;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include respond("tab") {
      font-size: 2.4rem;
    }
    @include respond("pc") {
      font-size: 2.9rem;
      margin-bottom: 1.8rem;
    }
  }
  &-yellow-line {
    background-color: #f3dc37;
    height: 2px;
    width: 8rem;
    margin-bottom: 31%;
    @include respond("tab") {
      margin-bottom: 34%;
    }
    @include respond("pc") {
      width: 10rem;
      height: 3px;
    }
  }

  &-flowers {
    object-fit: contain;
    position: absolute;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &-2 {
      transform: translate(-50%, -50%) rotateX(180deg);
    }
  }

  &-desc {
    text-align: center;
    max-width: 70%;
    &-price {
      font-size: 1.8rem;
      border-bottom: 2px solid #f3dc37;
      & b {
        font-size: 3rem;
      }
      @include respond("tab") {
        & b {
          font-size: 3.4rem;
        }
      }
      @include respond("pc") {
        font-size: 2rem;
        & b {
          font-size: 4.1rem;
        }
      }
    }
    &-note {
      white-space: pre-wrap;
      font-size: 1.3rem;
      margin-top: 1rem;
      @include respond("tab") {
        font-size: 1.5rem;
      }
      @include respond("pc") {
        margin-top: 2rem;
        font-size: 1.6rem;
      }
    }
  }

  &-back {
    width: 82%;
  }
}

.card-side::after {
  content: "";
  width: 92%;
  height: 92%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px dotted $black-p;
  border-radius: 50%;
}
//CONTACT
/////////////////////////////////////////////////////////////
#contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 5rem;

  @include respond("tab") {
    padding-top: 8rem;
  }
  @include respond("pc") {
    height: 94vh;
    padding-top: 11rem;
  }
}
.contact {
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &-title {
    @include respond("pc") {
      margin-left: 15%;
      & > h2 {
        font-size: 3.9rem;
      }
      &-leaf {
        top: -13rem;
        left: -15rem;
      }
    }
  }

  &-contents {
    width: 72%;
    min-width: 34.7rem;
    margin: 6rem auto;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 3px;
    padding: 1rem 1.6rem 1.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);

    @include respond("tab") {
      margin: 10rem auto;
      padding: 2.5rem 2rem 3.5rem;
    }
    @include respond("pc") {
      margin-top: 9%;
      padding: 6rem 4rem;
    }

    &-intro {
      font-size: 1.5rem;
      @include respond("tab") {
        font-size: 1.7rem;
      }
      @include respond("pc") {
        font-size: 2.8rem;
        letter-spacing: 1px;
      }
    }
    &-address {
      display: inline-block;
      font-size: 2rem;
      padding: 2.2rem 0 0.3rem;
      font-weight: 400;
      border-bottom: 2px dashed #efe60e;
      align-self: center;
      text-decoration: none;
      color: inherit;
      transition: transform 0.2s;

      &:hover,
      &:focus {
        transform: translate3D(0, -3px, 0);
        backface-visibility: hidden;
        @include tsh-s;
      }
      &:active {
        transform: translate3D(0, -1px, 0);
        backface-visibility: hidden;
      }

      @include respond("tab") {
        font-size: 2.3rem;
        padding-top: 3rem;
        border-bottom-width: 3px;
      }
      @include respond("pc") {
        font-size: 3.8rem;
        padding-top: 5rem;
        border-bottom-width: 4px;
      }
    }
  }
}
//FOOTER
////////////////////////////////////////////////////////
.footer {
  width: 100%;
  background-color: #967474;
  color: #fff;
  text-align: center;
  margin: 1.5rem 0 4.4rem;
  font-size: 1rem;

  @include respond("tab") {
    font-size: 1.5rem;
    padding: 0.4rem 1;
    margin: 1rem 0;
  }
  @include respond("pc") {
    font-size: 2.2rem;
    padding: 0.7rem 0;
    margin: 1rem 0 2rem;
  }
}

//NO SCRIPT, NO IE
////////////////////////////////////
.ie {
  position: absolute;
  bottom: -6rem;
  right: 1rem;
  white-space: pre-wrap;
  border: 1px solid #333;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem 1.4rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
}
</style>

<script>
import ContactLink from "~/components/Global/ContactLink";
import LangSwitch from "~/components/Global/LangSwitch";
export default {
  data() {
    return {
      ie: false,
      hover0: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false
    };
  },
  computed: {
    title() {
      return this.$vssWidth >= this.$data.$tab
        ? this.$t("heroTitle.pc")
        : this.$t("heroTitle.mobile");
    },
    sub() {
      return this.$vssWidth >= this.$data.$tab
        ? this.$t("heroSub.pc")
        : this.$t("heroSub.mobile");
    }
  },
  components: {
    ContactLink,
    LangSwitch
  },
  mounted() {
    const ua = window.navigator.userAgent;
    const isIE = /MSIE|Trident/.test(ua);

    if (isIE) {
      this.ie = true;
    }
  }
};
</script>