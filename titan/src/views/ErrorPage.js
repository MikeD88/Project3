
import CustomEmptyOverlayGrid from "../components/StyledGridOverlay";

export default function ErrorPage() {
  console.error('error');
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <CustomEmptyOverlayGrid />
    </div>
  );
}