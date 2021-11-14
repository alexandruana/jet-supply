<template>
    <header class="flex justify-between flex-wrap border-b border-jet-blue-light bg-jet-blue">
        <div class="container flex justify-between mx-auto flex-wrap p-6">
            <a class="flex title-font font-medium items-center text-jet-blue mb-4 md:mb-0">
                <p class="ml-3 text-xl font-black text-white">JET APP</span></p>
            </a>
             <nav class="flex flex-wrap items-center text-base justify-center text-jet-blue-light">
                 <div class="flex items-center px-5 py-1 border-2 rounded-full border-jet-blue-light font-medium transition-all hover:text-white hover:border-white">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'btc' }" class="text-jet-blue-light fa-lg mr-2"/>
                    <p class="font-bold">BTC</p>
                 </div>
            </nav>
        </div>
    </header>
</template>