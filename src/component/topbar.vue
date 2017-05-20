<template>
    <div>
        <el-menu default-active="1" mode="horizontal">
            <el-menu-item index="1">
                <router-link :to="{name: 'pageA'}">去pageA</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link :to="{name: 'pageB'}">去pageB</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>