import numpy as np
import librosa
from scipy.spatial.distance import euclidean, cityblock
from fastdtw import fastdtw
from sklearn.preprocessing import StandardScaler


def extract_mel_spectrogram(file_path):
    y, sr = librosa.load(file_path, sr=None)
    mel_spectrogram = librosa.feature.melspectrogram(y=y, sr=sr, n_mels=128)
    log_mel_spectrogram = librosa.power_to_db(mel_spectrogram, ref=np.max)
    return log_mel_spectrogram.T


def normalize_features(features):
    scaler = StandardScaler()
    return scaler.fit_transform(features)


def dtw_distance(features1, features2, distance_metric=euclidean):
    distance, path = fastdtw(features1, features2, dist=distance_metric)
    return distance


def compute_similarity(features1, features2, distance_metric=euclidean):
    distance = dtw_distance(features1, features2, distance_metric)
    normalization_factor = (len(features1) + len(features2)) / 2
    normalized_distance = distance / normalization_factor
    similarity = 1 / (1 + normalized_distance)
    return similarity


# Load and preprocess speech recordings
features1 = extract_mel_spectrogram('1.wav')
features2 = extract_mel_spectrogram('2.wav')

# Normalize the features
features1 = normalize_features(features1)
features2 = normalize_features(features2)

# Compute similarity using Manhattan distance
similarity = compute_similarity(
    features1, features2, distance_metric=cityblock)
print(f'Similarity: {similarity:.2f}')
