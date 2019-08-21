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
          <p class="title-sub">{{ $t('aboutSub') }}</p>
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
          <p class="title-sub">{{ $t('courseSub') }}</p>
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
          <div class="card">
            <h3 class="card-title">{{ $t('card.b1') }}</h3>
            <span class="card-yellow-line"></span>
          </div>
          <div class="card">
            <h3 class="card-title">{{ $t('card.b2') }}</h3>
            <span class="card-yellow-line"></span>
          </div>
          <div class="card" v-show="$vssWidth >= $data.$tab">
            <img
              class="card-flowers card-flowers-tulip"
              src="~/assets/img/pc/1x/flower.png"
              srcset="~/assets/img/pc/1x/flower.png 273w, ~/assets/img/pc/2x/flower.png 546w"
              sizes="273px"
              alt
            />
          </div>
          <div class="card" v-show="$vssWidth >= $data.$tab">
            <img
              class="card-flowers card-flowers-grape"
              src="~/assets/img/pc/1x/grape.png"
              srcset="~/assets/img/pc/1x/grape.png 238w, ~/assets/img/pc/2x/grape.png 476w"
              sizes="238px"
              alt
            />
          </div>
          <div class="card">
            <h3 class="card-title">{{ $t('card.b3') }}</h3>
            <span class="card-yellow-line"></span>
          </div>
          <div class="card">
            <h3 class="card-title">{{ $t('card.b4') }}</h3>
            <span class="card-yellow-line"></span>
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
          <h2 class="title-prime">Contact</h2>
        </div>
        <div class="contact-contents">
          <p class="contact-contents-intro">{{ $t('contactIntro') }}</p>
          <h3 class="contact-contents-address">marina.soranzo@yahoo.de</h3>
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
#top {
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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
      }

      &-contact {
        height: 3rem;
        object-fit: contain;
        cursor: pointer;
        transition: transform 0.2s, filter 0.2s;
        outline: none;

        &:hover,
        &:focus {
          @include iconHover;
        }
        &:active {
          @include iconActive;
        }
        @include respond("tab") {
          margin-left: 7.5rem;
          margin-right: auto;
        }
      }
    }
    &-bottom {
      bottom: 0;
      left: 0;
      justify-content: center;
    }
  }

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

    .hero {
      width: 100%;
      background: rgba(#e8e9aa, 0.8);
      color: #2176ff;
      padding: 2rem 1.4rem 1rem;
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
        font-size: 3.6rem;
        line-height: 1.3;
        letter-spacing: 0.1rem;
        @include respond("pc") {
          font-size: 4.5rem;
        }
      }

      &-sub {
        font-size: 2.5rem;
        margin-left: 3rem;
        margin-top: 1.4rem;
        @include respond("pc") {
          font-size: 3.2rem;
          margin-left: 0;
        }
      }
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

  .main {
    @include respond("tab") {
      margin-top: -4rem;
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
          left: -13rem;
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
      &-sub {
        font-size: 1.7rem;
        @include respond("tab") {
          font-size: 1.9rem;
        }
        @include respond("pc") {
          font-size: 2.5rem;
        }
      }
    }

    .about {
      margin-top: -5.3rem;
      display: grid;
      grid-template-rows: repeat(3, auto);
      grid-gap: 2rem;

      @include respond("tab") {
        grid-gap: 4.7rem;
      }
      @include respond("pc") {
        grid-template-rows: repeat(2, auto);
        grid-template-columns: 1fr 492px;
        grid-gap: 1.6rem 4.2rem;
        align-items: center;
        padding: 0 5% 0 11%;
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
          margin-top: 8rem;
          box-shadow: 7px 7px 8px rgba(0, 0, 0, 0.3);

          &::after {
            content: "";
            position: absolute;
            top: -78px;
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
          @include respond("pc") {
            font-size: 2rem;
            line-height: 1.3;
          }

          &:not(:last-child) {
            margin-bottom: 2.6rem;
          }
        }
      }
    }

    .branch2 {
      width: 96%;
      max-width: 1000px;
      object-fit: contain;
      float: right;
    }

    .course {
      margin-top: 2rem;
      clear: right;

      &-title {
        @include respond("pc") {
          margin-left: 15%;
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
          margin-bottom: 12rem;
        }

        &-flower {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(7.5rem + 3vw);
          object-fit: contain;
        }

        .card {
          position: relative;
          border-radius: 50%;
          background-color: #fafafa;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;

          &::after {
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

          &-title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 5rem;
            font-size: 2rem;
            white-space: pre;
            text-align: center;
            margin-bottom: 1.2rem;

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

            &-tulip {
              width: 85%;
              top: 8%;
              left: 8%;
              transform: rotate(27deg);
            }
            &-grape {
              width: 75%;
              top: 14%;
              left: 8%;
              transform: rotate(-15deg);
            }
          }
        }
      }
    }

    #contact {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 5rem 1rem 0;

      @include respond("tab") {
        padding: 8rem 1rem 0;
      }
      @include respond("pc") {
        height: 94vh;
        padding: 11rem 1rem 0;
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
            letter-spacing: 1px;
            @include respond("tab") {
              font-size: 1.7rem;
            }
            @include respond("pc") {
              font-size: 2.8rem;
            }
          }
          &-address {
            display: inline-block;
            font-size: 2rem;
            padding: 2.2rem 0 0.3rem;
            font-weight: 400;
            border-bottom: 2px dashed #efe60e;
            align-self: center;

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
    }
  }

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
}
</style>

<script>
import ContactLink from "~/components/Global/ContactLink";
import LangSwitch from "~/components/Global/LangSwitch";
export default {
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
  }
};
</script>