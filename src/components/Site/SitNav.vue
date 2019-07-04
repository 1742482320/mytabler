<template>
    <div class="header collapsed d-lg-flex p-0" :class="{show: !collapsed}">
        <container>
            <grid-row class="align-items-center">
                <grid-row lg="3" class="ml-auto">

                </grid-row>
                <grid-col lg class="order-lg-first">
                    <t-nav class="border-0 flex-column flex-lg-row" tabbed>
                        <slot></slot>
                    </t-nav>
                </grid-col>
            </grid-row>
        </container>
    </div>
</template>
