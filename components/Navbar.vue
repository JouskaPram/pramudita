<template>
    <div>
        <header class="fixed top-0 left-0 z-10 flex w-full items-center bg-transparent"
          :class="{ 'navbar-fixed': isNavbarFixed }"
        :style="{'background-color': isNavbarFixed ? 'transparent' : 'transparent;'}"
        >
          <div class="container">
            <div class="relative flex items-center justify-between">
              <div class="px-4">
                <router-link to="/" class="block py-3 text-lg font-bold text-blue-500">
                  Pramudita
                </router-link>
              </div>
              <div class="flex items-center justify-center px-4">
                <button
  @click="toggleHamburger"
  :class="{'hamburger-active': isHamburgerActive}"
  class="absolute right-4 block lg:hidden "
>
  <span
    class="my-2 block h-[2px] w-[30px] origin-top-left bg-slate-900 transition duration-500 ease-in-out "
  ></span>
  <span
    class="my-2 block h-[2px] w-[30px] bg-slate-900 transition duration-500 ease-in-out "
  ></span>
  <span
    class="my-2 block h-[2px] w-[30px] origin-bottom-left bg-slate-900 transition duration-500 ease-in-out "
  ></span>
</button>
                <nav
                  id="nav-menu"
                  :class="{'hidden': !isHamburgerActive}"
                  class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg  dark:shadow-slate-700 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent"
                >
                  <ul class="block lg:flex">
                    <li class="group">
                      <router-link to="/" class="mx-8 flex py-2 text-sm text-slate-900 group-hover:text-blue-700 ">
                        Beranda
                      </router-link>
                    </li>
                    <li class="group">
                      <router-link to="/about" class="mx-8 flex py-2 text-sm text-slate-900 group-hover:text-blue-700  ">
                        Tentang Saya
                      </router-link>
                    </li>
                    <li class="group">
                      <router-link to="/portfolio" class="mx-8 flex py-2 text-sm text-slate-900 group-hover:text-blue-700  ">
                        Portfolio
                      </router-link>
                    </li>
                    <li class="group">
                      <router-link to="/clients" class="mx-8 flex py-2 text-sm text-slate-900 group-hover:text-blue-700  ">
                        Client
                      </router-link>
                    </li>
      
                    <li class="group">
                      <router-link to="/contact" class="mx-8 flex py-2 text-sm text-slate-900 group-hover:text-blue-700  ">
                        Kontak
                      </router-link>
                    </li>
                  </ul>
           
              </nav>
            </div>
        
          </div>
        </div>
      </header>
    </div>
</template>

<script setup>

    const isNavbarFixed = ref(false);
    const isHamburgerActive = ref(false);

    const toggleHamburger = () => {
      isHamburgerActive.value = !isHamburgerActive.value;
    };

    
    const onScroll = () => {
      if (window.scrollY > 50) {
        isNavbarFixed.value = true;
      } else {
        isNavbarFixed.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });

</script>
  
<style>
 .hamburger-active > span:nth-child(1) {
    transform: rotate(45deg) translate(-8px, 8px);
  }

  .hamburger-active > span:nth-child(2) {
    opacity: 0;
    scale: 0;
  }

  .hamburger-active > span:nth-child(3) {
    transform: rotate(-45deg) translate(-8px, -8px);
  }

  .hamburger-active > span {
    transition: all 0.5s ease-in-out;
  }
</style>