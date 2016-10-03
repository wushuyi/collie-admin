<template>
    <!-- =============================================== -->

    <!-- Left side column. contains the sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../../assets/images/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>Alexander Pierce</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
            <!-- search form -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
                </div>
            </form>
            <!-- /.search form -->
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu">
                <li class="header">　主 导 航　{{$route.path}}</li>

                <li v-bind:class="{ 'active':  $route.path === '/' }">
                    <a v-link="{ path: '/' }">
                        <i class="fa fa-dashboard"></i>
                        <span>控制台</span>
                    </a>
                </li>
                <li class="treeview" v-bind:class="{ 'active':  $route.path.startsWith('/accounts') }">
                    <a href="#">
                        <i class="fa  fa-users"></i>
                        <span>账户系统</span>
                        <span class="pull-right-container">
                              <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li v-bind:class="{ 'active':  $route.path.startsWith('/accounts/user') }">
                            <a v-link="{ path: '/accounts/user' }"><i class="fa fa-circle-o"></i> 用户</a>
                        </li>
                        <li v-bind:class="{ 'active':  $route.path.startsWith('/accounts/role') }">
                            <a v-link="{ path: '/accounts/role' }"><i class="fa fa-circle-o"></i> 权限</a>
                        </li>
                    </ul>
                </li>
                <li class="treeview" v-bind:class="{ 'active':  $route.path.startsWith('/blog') }">
                    <a href="#">
                        <i class="fa fa-pencil"></i>
                        <span>博客系统</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li v-bind:class="{ 'active':  $route.path.startsWith('/blog/post') }">
                            <a v-link="{ path: '/blog/post' }"><i class="fa fa-circle-o"></i> 文章</a>
                        </li>
                        <li v-bind:class="{ 'active':  $route.path.startsWith('/blog/tag') }">
                            <a v-link="{ path: '/blog/tag' }"><i class="fa fa-circle-o"></i> 标签</a>
                        </li>
                        <li v-bind:class="{ 'active':  $route.path.startsWith('/blog/comment') }">
                            <a v-link="{ path: '/blog/comment' }"><i class="fa fa-circle-o"></i> 用户评论</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- =============================================== -->
</template>

<script>

</script>