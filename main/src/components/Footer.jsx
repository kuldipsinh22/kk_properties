import React from "react";

export default function Footer() {
  return (
    <footer class="footer pt-3  ">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-6 mb-lg-0 mb-4">
            <div class="copyright text-center text-sm text-muted text-lg-start">
              © <script>document.write(new Date().getFullYear())</script>, made
              by
              <span class="font-weight-bold"> Kuldipsinh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
