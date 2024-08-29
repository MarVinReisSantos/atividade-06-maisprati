import React from 'react';
import './MovieModal.css'; // Crie um arquivo CSS para o estilo do modal

function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>{movie.original_title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.original_title}
        />
        <p>{movie.overview}</p>
        <p>
          <strong>Data de lançamento:</strong> {movie.release_date}
        </p>
      </div>
    </div>
  );
}

export default MovieModal;
