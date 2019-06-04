<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

         <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="home" exact>Home</b-nav-item>
              <b-nav-item to="about">About</b-nav-item>
              <b-nav-item to="grid">Grid</b-nav-item>
              <b-nav-item to="card">Card</b-nav-item>
            </b-navbar-nav>
         </b-collapse>
      </b-container>
    </b-navbar>
    
    <b-container><router-view/></b-container>
    
  </div>
</template>

